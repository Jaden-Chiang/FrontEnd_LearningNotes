import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

	back = () => {
		this.props.history.goBack()
	}

	forward = () => {
		this.props.history.goForward()
	}

	render() {
		// console.log('Header组件收到的props是',this.props);
		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.back}>back</button>
				<button onClick={this.forward}>forward</button>
			</div>

		)
	}
}

// withRouter 可以加工一般组件,让一般组件具备路由组件所特有的API
// withRouter 的返回值是一个新组件

export default withRouter(Header)
