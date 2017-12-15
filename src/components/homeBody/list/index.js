/**
 * Created by li on 2017/12/15 15:49.
 */
import './index.less'
import React from 'react'
import {List, Avatar, Icon} from 'antd'
export default class BlogList extends React.Component{
    componentDidMounted(){
        console.log(this)
    }
    render(){
        const {title="无",description="无",date="1970/1/1"} = this.props;
        return (
            <div>

            </div>
        )
    }
}