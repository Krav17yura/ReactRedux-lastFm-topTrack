import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxHeight: 300,
        minHeight: 280,
        width: 280,
        marginBottom: 20
    },
    buttonBlock: {}
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
                        <Typography variant="body2" color="textSecondary" component="p" onClick={() => getArtistData(artistName, artistID)}>
                            {artistName}
                        </Typography>
                    </NavLink>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Item