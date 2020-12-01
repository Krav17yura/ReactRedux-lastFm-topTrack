import React from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import Chip from "@material-ui/core/Chip";
import Loader from "../components/loading/loading";
import AppError from "../components/app-error";

const useStyles = makeStyles(() => ({
    margin: {
        margin: 10
    },
}));

const ItemPage = () => {
    const classes = useStyles();
    const isLoading = useSelector((state) => state.reArtist.artistDataStatus.isLoaded)
    const isError = useSelector((state) => state.reArtist.artistDataStatus.isError)
    const userData = useSelector((state) => state.reArtist.artistData);
    const data = useSelector((state) => state.reArtist.artistData).name !== undefined ?
        userData :
        JSON.parse(localStorage.getItem("itemData"))


    return (
        <Container>
            {isError ? <>
                {isLoading ? <>
                    {data.name !== undefined ? <Grid>
                        <Avatar alt="Remy Sharp" src={data.image[2]['#text']} className={classes.margin}/>
                        <Typography variant='h5'>
                            {data.name}
                        </Typography>
                        {
                            data.tags.tag.map(item => (
                                <Chip
                                    key={item.name}
                                    color="secondary"
                                    label={item.name}
                                    component="a"
                                    href={item.url}
                                    clickable
                                    className={classes.margin}
                                />
                            ))
                        }
                        <Typography variant='subtitle1' dangerouslySetInnerHTML={{__html: data.bio.summary}}/>
                    </Grid> : <h1>Loading</h1>}

                </> : <Loader/>}
            </> : <AppError/>}
        </Container>
    )
}

export default ItemPage