import './style'
import { Component } from 'preact'
import { checkCookie, getCookie, setCookie, getWidth } from './utils'

import BTCPay from './components/btcpayserver'
import Buttonrow from './components/buttonrow'
import Display from './components/display'
import Keypad from './components/keypad'
import Modal from './components/modal'

export default class App extends Component {
	state = {
		payValue: '',
		sanitizedValue: 0,
		fontSize: 120,
		clientConfirm: false,
		btcpayurl: null //'https://testnet.demo.btcpayserver.org/apps/3paj2kB8xK2vcf4PNcvLzycT2KnM/pos'
	}

	checkSize = () => {
		const div = document.getElementById('display')
		let maxWidth = getWidth(div.parentElement)
		let curWidth = getWidth(div, 1)
		const fontSize = this.state.fontSize
		const gamma = maxWidth / curWidth || 0
		if(curWidth > maxWidth){
			return this.setState({fontSize: Math.floor(fontSize * gamma)})
		}	
		
		if(curWidth < maxWidth && fontSize < 120) {
			return this.setState({fontSize: Math.min(fontSize * gamma, 120)})
		}
	}

	handleInput = async (e) => {
		if(this.state.clientConfirm) return
		const key = e.target.innerText
		let value = this.state.payValue
		if(key == 'C') {
			value = value.substring(0, value.length - 1)
			// if(value[value.length - 1] == '.'){value = value.substring(0, value.length - 1)}
			if(value == '0'){value = ''}
			this.setState({payValue: value, sanitizedValue: Math.round(parseFloat(value) * 100) / 100})
			return this.checkSize()
		}
		if(key == '.' && value.includes(key)) return
		if(!value.length && key == '.') return this.setState({payValue: '0.'})
		await this.setState((state, props) => {
			value = state.payValue + e.target.innerText
			return { payValue: value, sanitizedValue: Math.round(parseFloat(value) * 100) / 100 }
		})
		
		return this.checkSize()
	}

	handleConfirm = (e) => {
		e.preventDefault()
		if(this.state.payValue === '') return
		this.setState({clientConfirm: true})
	}

	handleCancel = () => {
		if(this.state.payValue === '') return
		return this.setState({
			payValue: '',
			clientConfirm: false,
			sanitizedValue: 0
		})
	}

	handleURL = (e) => {
		return this.setState({btcpayurl: e.target.value})
	}

	boarding = (e) => {
		e.preventDefault()
		const cookie = `btcpayurl=${this.state.btcpayurl}`
		setCookie(cookie)
		// document.cookie = cookie
		this.setState({onBoarding: false})
	}

	componentDidMount = () => {
		const url = checkCookie('btcpayurl')
		if(!url){
			return this.setState({onBoarding: true})
		}
		const btcpayurl = url[0].trim().split('=')[1]
		this.setState({btcpayurl})
	}

	render({}, {clientConfirm, onBoarding, payValue, fontSize, sanitizedValue}) {
		return (
			<div class='root'>
				{clientConfirm && 
					<Modal>
						<h2>{`Pay €${sanitizedValue.toFixed(2)} with BTC`}</h2>
						<BTCPay value={sanitizedValue} url={this.state.btcpayurl} cancel={this.handleCancel}/>
					</Modal>
				}
				{onBoarding && 
				<Modal>
					<h1>Settings</h1>
					<h3>Enter BTCPay Server URL</h3>
					<form>
						<input type="url" name="url" value={this.state.btcpayurl} onChange={this.handleURL} />
						<input class='btn confirm' type='submit' value='Ok' onClick={this.boarding} />
					</form>
				</Modal>}
				<Display value={payValue} fontSize={fontSize} />
				<Keypad click={this.handleInput} client={clientConfirm}/>
				<Buttonrow confirm={this.handleConfirm} cancel={this.handleCancel}  />
			</div>
		)
	}
}
