/**
 * Created by li on 2017/12/13 15:05.
 */

import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from '../containers/home/index'
import BlogPage from '../containers/blog/index'
export default ()=>(
    <Router>
        <div>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/blog" component={BlogPage}/>
        </div>
    </Router>
)