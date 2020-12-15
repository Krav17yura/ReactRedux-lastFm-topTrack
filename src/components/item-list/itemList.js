import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/actions/acMain";
import {fetchArtistData} from "../../redux/actions/acArtist";
import {Grid} from "@material-ui/core";
import Item from "../item";
import Loader from "../loading/loading";
import AppError from "../app-error";


const ItemList = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.reMain.data)
    const isLoading = useSelector((state) => state.reMain.itemStatus.load)
    const isError = useSelector((state) => state.reMain.itemStatus.error)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const getArtistData = (name, id) => {
        dispatch(fetchArtistData(name, id))
    }

    return (
        <Grid container direction={"row"} justify="space-between" alignItems="center">
            {isError ? <>
                {isLoading ? <>
                    {data && data.map(obj => (
                        <Item
                            key={obj.name}
                            artistName={obj.artist.name}
                            musicName={obj.name}
                            img={obj.image}
                            url={obj.url}
                            artistID={obj.artist.mbid}
                            getArtistData={getArtistData}
                        />
                    ))
                    }
                </> : <Loader/>}
            </> : <AppError/>}
        </Grid>
    )
}

export default ItemList