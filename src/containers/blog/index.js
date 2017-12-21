/**
 * Created by li on 2017/12/14 13:26.
 */
import React from 'react'
import Header from '../../components/header'
import './index.less'
import BlogBody from '../../components/blogBody'
import Footer from '../../components/footer'
export default class BlogPage extends React.Component{
    render(){
        return (
            <div className="blog">
                <Header/>
                <BlogBody/>
                <Footer/>
            </div>
        )
    }
}