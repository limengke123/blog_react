/**
 * Created by li on 2017/12/21 17:33.
 */
import React from 'react'
import './index.less'
import {Row,Col} from 'antd'
import Title from './title'
import Content from './content'
import Info from './info'
export  default class BlogPage extends React.Component{
    render(){
        return (
            <Row type="flex" className="blog-body">
                <Col span={18} offset={3}>
                    <Title/>
                    <Content/>
                    <Info/>
                    blog page
                </Col>
            </Row>
        )
    }
}