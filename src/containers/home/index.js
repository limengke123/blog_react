/**
 * Created by li on 2017/12/14 11:12.
 */
import './index.less'
import React from 'react'
import Header from '../../components/header'
import HomeBody from '../../components/homeBody'
import Footer from '../../components/footer'
export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home">
                <Header/>
                <HomeBody/>
                <Footer/>
            </div>
        )
    }
}