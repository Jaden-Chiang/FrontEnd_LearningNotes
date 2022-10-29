import React, { Component } from 'react'
import qs from 'querystring'

const DetailData = [
    { id: '01', content: 'Hello, China' },
    { id: '02', content: 'Hello, China-Henan' },
    { id: '03', content: 'Hello, China-Henan-Luoyang' }
]

export default class Detail extends Component {

    render() {
        // 接收params参数
        // const { id, title } = this.props.match.params

        // 接收search参数
        const { search } = this.props.locaiton
        const { id, title } = qs.parse(search)

        const findresult = DetailData.find((obj) => {
            return obj.id === id
        })

        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findresult.content}</li>
            </ul>
        )
    }
}
