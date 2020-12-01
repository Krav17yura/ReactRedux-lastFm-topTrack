import React, {useEffect, useState} from "react";
import {Container, Grid} from "@material-ui/core";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchTrack, setSearchInputValue} from "../redux/actions/acSearch";
import Button from "@material-ui/core/Button";
import {Pagination} from "@material-ui/lab";
import Item from "../components/item";
import {v4 as uuidv4} from 'uuid'
import {fetchArtistData} from "../redux/actions/acArtist";
import Loader from "../components/loading/loading";
import AppError from "../components/app-error";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    form: {
        marginTop: theme.spacing(2)
    },
    btn: {
        marginTop: 10
    },
    pagination: {
        margin: 10
    },
    itemGrid: {
        marginTop: 10
    }

}))

const SearchItem = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.reSearch.searchInputValue)
    const trackData = useSelector((state) => state.reSearch.trackData)
    const isLoading = useSelector((state) => state.reSearch.trackDataStatus.isLoaded)
    const isError = useSelector((state) => state.reSearch.trackDataStatus.isError)
    const classes = useStyle()

    const [currentPage, setCurrentPage] = React.useState(1);
    const [contactsPerPage] = React.useState(12)
    const [currentPost, setCurrentPost] = React.useState([])
    const [pageNumber, setPageNumber] = React.useState(1)

    useEffect(() => {
        const indexOfLastPost = currentPage * contactsPerPage;
        const indexOfFirstPost = indexOfLastPost - contactsPerPage
        setCurrentPost(trackData.slice(indexOfFirstPost, indexOfLastPost))
        setPageNumber(Math.ceil(trackData.length / contactsPerPage))
    }, [trackData, currentPage])


    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const onInputChange = (value) => {
        dispatch(setSearchInputValue(value))
    }
    const onSearchTrack = (event) => {
        dispatch(fetchSearchTrack(inputValue))
        event.preventDefault()
    }

    const getArtistData = (name, id) => {
        dispatch(fetchArtistData(name, id = ''))
    }

    return (
        <Container>

            <form onSubmit={onSearchTrack}>
                <FormControl fullWidth variant="outlined" className={classes.form}>
                    <InputLabel htmlFor="outlined-adornment-amount">Search </InputLabel>
                    <OutlinedInput
                        value={inputValue}
                        onChange={event => onInputChange(event.target.value)}
                        id="outlined-adornment-amount"
                        labelWidth={60}
                        required
                    />
                    <Button variant="contained" color="primary" className={classes.btn} type={"submit"}>
                        Primary
                    </Button>
                </FormControl>
            </form>
            {isError ? <>
                {isLoading ? <>
                    <Grid container direction={"row"} justify="space-between" alignItems="center"
                          className={classes.itemGrid}>

                        {
                            currentPost.map(obj => (
                                <Item
                                    key={uuidv4()}
                                    artistName={obj.artist}
                                    musicName={obj.name}
                                    img={obj.image[2]['#text']}
                                    url={obj.url}
                                    artistID={obj.mbid}
                                    getArtistData={getArtistData}
                                />
                            ))
                        }
                    </Grid>
                    <Grid container justify="flex-end">
                        <Pagination count={pageNumber}
                                    variant="outlined"
                                    shape="rounded"
                                    className={classes.pagination}
                                    page={currentPage}
                                    onChange={handleChange}/>
                    </Grid>
                </> : <Loader/>}
            </> : <AppError/>}
        </Container>
    )
}

export default SearchItem