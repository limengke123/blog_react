/**
 * Created by li on 2017/12/14 17:12.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import {Row, Col, Menu, Icon} from 'antd'
import logo from '../../public/img/guapi_logo.png'
const {Item} = Menu
export default class Header extends React.Component {
    constructor(arg){
        super(arg);
        this.state = {
            nav:[{
                title:"试验地",
                route:"/blog"
            },{
                title:"荒地",
                route:"/"
            }],
            current:"blog"
        }
    }
    handlerClick = (e) =>{
        console.log('click',e)
        this.setState({
            current:e.key
        })
    }
    render() {
        return (
            <Row className="com-header" type="flex">
                <Col span={18} offset={3} className="nav">
                    <Menu
                        mode="horizontal"
                    >
                            <Link className="logo" to="/">
                                <img  src={logo} alt="可爱的小瓜皮"/>
                            </Link>
                        <Item key="mail">
                            <Icon type="mail"/>
                            <Link to="/blog">blog</Link>
                        </Item>
                        <Item key="app">
                            <Icon type="appstore"/>
                            <Link to="/">app</Link>
                        </Item>
                        <Item type="fk">
                            <Icon type="folder"/>
                            <Link to="/">文件</Link>
                        </Item>
                    </Menu>
                </Col>
            </Row>
        )
    }
}