import React from "react";
import {Container, makeStyles} from "@material-ui/core";
import ItemList from "../components/item-list";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px 20px 0 20px ",
        margin: "0 auto"
    }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth={"lg"}>
            <ItemList/>
        </Container>
    )
}

export default Home