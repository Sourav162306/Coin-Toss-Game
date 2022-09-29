import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: true, total: 0, heads: 0, tails: 0}

  onTossCoin = () => {
    const output = Math.floor(Math.random() * 2)
    console.log(output)
    if (output === 0) {
      this.setState({toss: true})
      this.setState(pre => ({total: pre.total + 1, heads: pre.heads + 1}))
    } else {
      this.setState({toss: false})
      this.setState(pre => ({total: pre.total + 1, tails: pre.tails + 1}))
    }
  }

  render() {
    const {toss, total, heads, tails} = this.state
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {toss && (
            <img
              className="toss-result-img"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          )}
          {!toss && (
            <img
              className="toss-result-img"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
