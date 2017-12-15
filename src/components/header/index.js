/**
 * Created by li on 2017/12/14 17:12.
 */
import React from 'react'
import './index.less'
import {Row, Col} from 'antd'
import logo from '../../public/img/guapi_logo.png'
import NavBtn from './navBtn'
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
            }]
        }
    }
    render() {
        const {nav} = this.state;
        return (
            <Row className="com-header" type="flex">
                <Col span={18} offset={3} className="nav">
                    <div className="logo">
                        <img  src={logo} alt="可爱的小瓜皮"/>
                    </div>
                    {
                        nav.map((val,index)=>
                            <NavBtn title={val.title} key={index} route={val.route}/>
                        )
                    }
                </Col>
            </Row>
        )
    }
}