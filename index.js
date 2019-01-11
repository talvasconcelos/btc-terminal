import './style'
import { Component } from 'preact'

import Display from './components/display'
import Keypad from './components/keypad'

export default class App extends Component {
	state = {
		payValue: '0'
	}

	handleInput = (e) => {
		this.setState((state, props) => {
			return {
				payValue: [...this.state.payValue, e.target.innerText]
			}
		})
		const width = document.getElementById('display').clientWidth + 67
		console.log(width)
	}

	render({}, {payValue}) {
		return (
			<div class='root'>
				<Display value={payValue}/>
				<Keypad click={this.handleInput}/>
			</div>
		)
	}
}
