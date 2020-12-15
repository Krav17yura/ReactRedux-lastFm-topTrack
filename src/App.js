import React from 'react'
import Header from "./components/header";
import {Home, ItemPage, SearchItem} from './pages'
import {Route, Switch} from 'react-router-dom'

const App = () => {


    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/searchItem' component={SearchItem}/>
                <Route exact path='/itemPage' component={ItemPage}/>
            </Switch>
        </>

    )
}

export default App;
