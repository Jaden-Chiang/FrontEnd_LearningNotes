// 引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

import React, { Component } from 'react'

// 定义UI组件
class Count extends Component {

    // 加法
    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }

    // 减法
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }

    // 如果count为奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 === 1) {
            this.props.jia(value * 1)
        }
    }

    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1, 500)
    }

    render() {
        // console.log('UI组件接收到的props是:', this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count} </h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}


// 创建并暴露一个Count的容器组件
// export default CountContainer = connect()(CountUI)
export default connect(
    state => ({ count: state }),
    // mapDispatchToProps的一般写法:
    // dispatch => (
    //     {
    //         jia: value => dispatch(createIncrementAction(value)),
    //         jian: value => dispatch(createDecrementAction(value)),
    //         jiaAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time))
    //     })

    // mapDispatchToProps的简写
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }
)(Count)
