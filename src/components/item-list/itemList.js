import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/actions/acMain";
import {Grid} from "@material-ui/core";
import Item from "../item";
import {fetchArtistData} from "../../redux/actions/acArtist";
import Loader from "../loading/loading";
import AppError from "../app-error";


const ItemList = () => {
    const data = useSelector((state) => state.reMain.data)
    const isLoading = useSelector((state) => state.reMain.itemStatus.load)
    const isEror = useSelector((state) => state.reMain.itemStatus.error)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const getArtistData = (name, id) => {
        dispatch(fetchArtistData(name, id))
    }

    return (
        <Grid container direction={"row"} justify="space-between" alignItems="center">
            {isEror? <>
            {isLoading ? <>
                {data && data.map(obj => (
                    <Item
                        key={obj.name}
                        artistName={obj.artist.name}
                        musicName={obj.name}
                        //img={Object.values(obj.image[3])[0]}
                        img={obj.image[2]['#text']}
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