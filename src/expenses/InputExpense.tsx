import DatePick from './DatePick'

const InputExpense = () => {
  return (
    <div className="inputRow">
      <div className="row">
        <div className="column">
          <div className="date-header">
            <DatePick />
          </div>
        </div>

        <div className="column">
          <div className="category-header">
            <input type="text" />
          </div>
        </div>

        <div className="column">
          <div className="amount-header">
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputExpense
