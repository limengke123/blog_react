/**
 * Created by li on 2017/12/21 17:33.
 */
import React from 'react'
import './index.less'
import {Row,Col,Divider} from 'antd'
import Title from './title'
import Content from './content'
import Info from './info'
export  default class BlogPage extends React.Component{
    constructor(arg){
        super(arg)
        this.state = {
            titleInfo :{
                title:"默认title",
                publishTime:"1970/1/1",
                author:"默认作者",
            }

        }
    }
    render(){
        const {titleInfo} = this.state
        return (
            <Row type="flex" className="blog-body">
                <Col span={18} offset={3}>
                    <Title info={titleInfo}/>
                    <Divider/>
                    <Content/>
                    <Divider/>
                    <Info/>
                    <Divider/>
                </Col>
            </Row>
        )
    }
}