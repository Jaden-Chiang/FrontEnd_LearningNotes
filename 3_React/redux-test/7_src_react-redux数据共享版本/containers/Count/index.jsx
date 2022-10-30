import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from '../../redux/actions/count'

class Count extends Component {

    add = () => {
        return this.props.jiafa(1)
    }

    render() {
        return (
            <div>
                <h2>当前求和为: {this.props.sum}, 下方组件总人数为:{this.props.renshu}</h2>
                <button onClick={this.add}>One Plus</button>
            </div>
        )
    }
}

export default connect(
    state => ({ sum: state.he, renshu: state.rens.length }),
    { jiafa: createIncrementAction }
)(Count)
