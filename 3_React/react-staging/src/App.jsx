import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import { WechatOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

export default class App extends Component {

	onChange = (date, dateString) => {
		console.log(date, dateString);
	};

	render() {
		return (
			<div>
				App...
				<button>点我</button>
				<Button type="primary">点我</Button>
				<WechatOutlined />
				<DatePicker onChange={this.onChange} />
			</div>
		)
	}
}
