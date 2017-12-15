/**
 * Created by li on 2017/12/15 15:24.
 */
import './index.less'
import React from 'react'
import {Link} from 'react-router-dom'

export default class NavBtn extends React.Component{
    render(){
        const {title="暂无菜单",route="/"} = this.props;
        return (
            <Link className="nav-btn" to={route}>
                {title}
            </Link>
        )
    }
}