import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, Grid, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    },
    root: {
        width: "100%"
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid className={classes.typographyStyles}>
                    <Grid container alignItems={"center"}>
                        <NavLink to="/" style={{textDecoration: 'none', color: 'unset'}}>
                            <Typography variant={'h5'}>
                                Best music
                            </Typography>
                        </NavLink>
                    </Grid>
                </Grid>
                <Grid item container xs={5} direction={"column"} justify='center' alignItems="flex-end">
                    <NavLink to="/searchItem" style={{textDecoration: 'none', color: 'unset'}}>
                        <IconButton aria-label="search" color="inherit">
                            <SearchIcon fontSize={"large"}/>
                        </IconButton>
                    </NavLink>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Header