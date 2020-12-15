import React from 'react';
import {Link, Typography, CardMedia, CardContent, CardActionArea, makeStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    root: {
       height: 300,
        width: 280,
        marginBottom: 20
    },
});

const Item = ({artistName, musicName, img, url, artistID, getArtistData}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Link href={url}>
                        Link to last.fm
                    </Link>
                    <Typography variant="h6" component="h6">
                        {musicName}
                    </Typography>
                    <NavLink to="/itemPage" style={{textDecoration: 'none', color: 'unset'}}>
                        <Typography variant="body2" color="textSecondary" component="p"
                                    onClick={() => getArtistData(artistName, artistID)}>
                            {artistName}
                        </Typography>
                    </NavLink>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Item