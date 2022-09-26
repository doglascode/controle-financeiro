import { AiFillDelete } from 'react-icons/ai';

function Transactions({ transactions, onUpdate }) {
  function updateTransactions(id) {
    onUpdate(transactions.filter(transaction => transaction.id !== id));
  }

  return (
    <div className="transactions-list">
      {transactions.map(({ id, name, value }) => {
        const transactionType = value < 0 ? 'negative' : 'positive';

        return (
          <div key={id} className={`transaction ${transactionType}`}>
            <div className="content">
              <h4>{name}</h4>
              <span>R$ {value}</span>
            </div>
            <button className="button-delete" onClick={() => updateTransactions(id)}>
              <AiFillDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Transactions;