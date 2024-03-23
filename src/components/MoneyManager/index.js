import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transcationsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  render() {
    const {titleInput,amountInput,optionId}=this.state
    return (
      <div className="app-container">
        <div className="manager-container">
          <h1 className="richard">Hi, Richard</h1>
          <p className="manager-desc">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <MoneyDetails />
        <div className="form-container">
          <form className="form">
            <h1 className="form-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="TITLE"
              value={titleInput}
            />

            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              placeholder="AMOUNT"
              value={amountInput}
            />

            <label className="label" htmlFor="select">
              TYPE
            </label>
            <select id="select">
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>

            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default MoneyManager
