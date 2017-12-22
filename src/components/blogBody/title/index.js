/**
 * Created by li on 2017/12/21 17:40.
 */
import React from 'react'
import './index.less'
import {Row,Col} from 'antd'
export default class BlogTitle extends React.Component {
    render(){
        const {title,publishTime,author} = this.props.info
        return (
            <div className="blog-title">
                <div className="title">
                    <h3 >
                        {title}
                    </h3>
                </div>
                <Row type='flex' className="">
                    <Col>
                        {author}
                    </Col>
                    <Col>
                        {publishTime}
                    </Col>
                </Row>
            </div>
        )
    }
}