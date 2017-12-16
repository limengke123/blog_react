/**
 * Created by li on 2017/12/14 17:12.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import {Row, Col, Menu, Icon} from 'antd'
import logo from '../../public/img/guapi_logo.png'
import NavBtn from './navBtn'
const {Item} = Menu
export default class Header extends React.Component {
    constructor(){
        super(...arguments);
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
        const {nav} = this.state;
        return (
            <Row className="com-header" type="flex">
                <Col span={18} offset={3} className="nav">
                    <Menu
                        // onClick = {this.handlerClick}
                        // selectedKeys = {[this.state.current]}
                        mode="horizontal"
                    >
                            <div className="logo">
                                <img  src={logo} alt="可爱的小瓜皮"/>
                            </div>
                        <Item key="mail">
                            <Icon type="mail"/>
                            <Link to="/blog">blog</Link>
                        </Item>
                        <Item key="app">
                            <Icon type="appstore"/>app
                        </Item>
                        <Item type="fk">
                            <Icon type="folder"/>文件
                        </Item>
                    </Menu>
                    {/*{*/}
                        {/*nav.map((val,index)=>*/}
                            {/*<NavBtn title={val.title} key={index} route={val.route}/>*/}
                        {/*)*/}
                    {/*}*/}
                </Col>
            </Row>
        )
    }
}