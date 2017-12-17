/**
 * Created by li on 2017/12/15 13:47.
 */
import './index.less'
import React from 'react'
import {Row, Col, List, Avatar, Icon} from 'antd'
import ListItem from './list'
const {Item} = List
export default class HomeBody extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            item: [1, 2, 3, 4, 5].map((val, index) => {
                    return {
                        href: 'http://ant.design',
                        title: `ant design part ${index}`,
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
                    }
                }
            )
        }
    }

    render() {
        const pagination = {
            pageSize: 10,
            current: 1,
            total: this.state.item.length,
            onChange: (() => {
            }),
        };
        const IconText = ({type, text}) => (
            <span>
                <Icon type={type} style={{marginRight: 8}}/>
                {text}
            </span>
        );
        return (
            <Row type="flex" className="com-body">
                <Col span={18} offset={3}>
                    <List
                        itemLayout="vertical"
                        size="large"
                        header={<div>fuck u</div>}
                        footer={<div>fuck u</div>}
                        pagination={pagination}
                        dataSource={this.state.item}
                        renderItem = {item=>(
                            <Item
                                key = {item.title}
                                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </Item>
                        )}
                    >
                    </List>
                </Col>
            </Row>
        )
    }
}