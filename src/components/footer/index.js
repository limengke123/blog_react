/**
 * Created by li on 2017/12/15 13:50.
 */
import './index.less'
import React from 'react'
import {Row, Col} from 'antd'
export default class Footer extends React.Component{
    render(){
        return (
            <Row className="com-footer" type="flex">
                <Col span={18} offset={3}>copyright!</Col>
            </Row>
        )
    }
}