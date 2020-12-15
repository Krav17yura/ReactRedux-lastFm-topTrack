import React, {useEffect} from "react";
import {Container, Grid, OutlinedInput, InputLabel, FormControl, makeStyles, Button} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchTrack, setSearchInputValue} from "../redux/actions/acSearch";
import {fetchArtistData} from "../redux/actions/acArtist";
import Item from "../components/item";
import Loader from "../components/loading/loading";
import AppError from "../components/app-error";
import {v4 as uuidv4} from 'uuid'

const useStyle = makeStyles(() => ({
    mrgTop: {
        marginTop: 10
    },
    pagination: {
        margin: 10
    },
}))

const SearchItem = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.reSearch.searchInputValue)
    const trackData = useSelector((state) => state.reSearch.trackData)
    const {isLoaded, isError} = useSelector(({reSearch}) => reSearch.trackDataStatus)


    const classes = useStyle()


    const [currentPage, setCurrentPage] = React.useState(1);
    const [contactsPerPage] = React.useState(12)
    const [currentPost, setCurrentPost] = React.useState([])
    const [pageNumber, setPageNumber] = React.useState(1)
    const indexOfLastPost = currentPage * contactsPerPage;
    const indexOfFirstPost = indexOfLastPost - contactsPerPage

    useEffect(() => {
        setCurrentPost(trackData.slice(indexOfFirstPost, indexOfLastPost))
        setPageNumber(Math.ceil(trackData.length / contactsPerPage))
    }, [trackData, currentPage, contactsPerPage, indexOfLastPost, indexOfFirstPost])


    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const onInputChange = (value) => {
        dispatch(setSearchInputValue(value))
    }
    const onSearchTrack = (event) => {
        event.preventDefault()
        dispatch(fetchSearchTrack(inputValue))
    }

    const getArtistData = (name, id) => {
        dispatch(fetchArtistData(name, id = ''))
    }

    return (
        <Container>
            <form onSubmit={onSearchTrack}>
                <FormControl fullWidth variant="outlined" className={classes.mrgTop}>
                    <InputLabel htmlFor="outlined-adornment-amount">Search </InputLabel>
                    <OutlinedInput
                        value={inputValue}
                        onChange={event => onInputChange(event.target.value)}
                        id="outlined-adornment-amount"
                        labelWidth={60}
                        required
                    />
                    <Button variant="contained" color="primary" className={classes.mrgTop} type={"submit"}>
                        Primary
                    </Button>
                </FormControl>
            </form>
            {isError ? <>
                {isLoaded ? <>
                    <Grid container direction={"row"} justify="space-between" alignItems="center"
                          className={classes.mrgTop}>
                        {
                            currentPost.map(obj => (
                                <Item
                                    key={uuidv4()}
                                    artistName={obj.artist}
                                    musicName={obj.name}
                                    img={obj.image}
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