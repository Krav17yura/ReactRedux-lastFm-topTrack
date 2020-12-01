import React from 'react'
import Header from "./components/header";
import {Home, ItemPage, SearchItem} from './pages'
import {Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/searchItem' component={SearchItem}/>
            <Route exact path='/itemPage' component={ItemPage}/>
        </>

    )
}

export default App;
