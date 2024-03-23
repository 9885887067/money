import './index.css'

const MoneyDetails = () => 
 (
  <div className="money-manager">
    <div className="your-balance-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        className="image"
        alt="balance"
      />
      <div className="details-container">
        <p className="balance">Your Balance</p>
        <p className="your-balance">Rs 0</p>
      </div>
    </div>

    <div className="your-income-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        className="image"
        alt="income"
      />
      <div className="details-container">
        <p className="balance">Your Balance</p>
        <p className="your-balance">Rs 0</p>
      </div>
    </div>

    <div className="your-expenses-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        className="image"
        alt="expenses"
      />
      <div className="details-container">
        <p className="balance">Your Balance</p>
        <p className="your-balance">Rs 0</p>
      </div>
    </div>
  </div>
)
export default MoneyDetails
