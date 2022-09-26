function Balance({ transactions }) {
  const transactionsValues = transactions.map(({ value }) => Number(value));
  const balance = transactionsValues.reduce((acc, current) => acc + current, 0);
  const balanceClassName = balance < 0 ? 'balance negative' : 'balance';

  const income = transactionsValues
    .filter(value => value > 0)
    .reduce((acc, cur) => acc + cur, 0);
    
  const expense = Math.abs(
    transactionsValues
      .filter(value => value < 0)
      .reduce((acc, cur) => acc + cur, 0)
  );

  function formatCurrency(value) {
    const style = { style: 'currency', currency: 'BRL' };
    return new Intl.NumberFormat('pt-BR', style).format(value);
  }

  return (
    <div className={balanceClassName}>
      <h4>Saldo Atual</h4>
      <h1>{formatCurrency(balance)}</h1>
      <div className="details">
        <div className="positive">
          <h4>Receitas</h4>
          <h3>{formatCurrency(income)}</h3>
        </div>
        <div className="negative">
          <h4>Despesas</h4>
          <h3>{formatCurrency(expense)}</h3>
        </div>
      </div>
    </div>
  );
}

export default Balance;