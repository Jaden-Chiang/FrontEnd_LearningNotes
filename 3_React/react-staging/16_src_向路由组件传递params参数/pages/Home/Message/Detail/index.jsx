import React, { Component } from 'react'

const DetailData = [
    { id: '01', content: 'Hello, China' },
    { id: '02', content: 'Hello, China-Henan' },
    { id: '03', content: 'Hello, China-Henan-Luoyang' }
]

export default class Detail extends Component {

    render() {
        // 接收params参数
        const { id, title } = this.props.match.params
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
