import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        // 获取用户的输入
        const { value } = this.keyWordNode
        // 发送请求前通知List更新状态
        PubSub.publish('My Topic', { isFirst: false, isLoading: true })
        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                // 请求成功后通知List更新状态
                PubSub.publish('My Topic', { isLoading: false, users: response.data.items })
            },
            error => {
                // 请求失败后通知List更新状态
                PubSub.publish('My Topic', { isLoading: false, err: '请求出错：' + error.message })
            })
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keyWordNode = c} type="text" placeholder="enter the name you search" />&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
