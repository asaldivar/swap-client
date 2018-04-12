import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Root extends Component {
	render() {
		return (
			<h1>hello moto</h1>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'))