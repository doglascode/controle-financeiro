import { useState, useRef, useEffect } from 'react';

import { Container, Input, Button, List, Alert } from './styles';
import GlobalStyle from './styles/GlobalStyle';

import Transactions from './components/Transactions';
import Balance from './components/Balance';

function App() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const nameInput = useRef(null);

  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem('transactions')) || [];
  });
  
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  function generateID() {
    return Math.floor(Math.random() * 10000);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !value) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    if (!Number(value)) {
      setError('O valor da transação deve ser em número');
      return;
    }

    setTransactions([...transactions, { id: generateID(), name, value }]);
    setError('');
    setName('');
    setValue('');

    nameInput.current.focus();
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1 className="title">Controle Financeiro</h1>
        <Balance transactions={transactions} />
        <form onSubmit={handleFormSubmit}>
          <Input
            placeholder="Nome da transação"
            type="text"
            value={name}
            onInput={e => setName(e.target.value)}
            ref={nameInput}
          />
          <Input
            placeholder="Valor da transação"
            type="text"
            value={value}
            onInput={e => setValue(e.target.value)}
          />
          {error && (<Alert>{error}</Alert>)}
          <Button type="submit">Adicionar Transação</Button>
        </form>
        {transactions.length > 0 && (
          <List>
            <h2>Todas as Transações</h2>
            <Transactions
              transactions={transactions}
              onUpdate={setTransactions} 
            />
          </List>
        )}
      </Container>
    </>
  );
}

export default App;