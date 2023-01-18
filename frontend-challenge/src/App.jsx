import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Simule sua Antecipação</h1>
        <form action="">
          <p>Informe o valor da venda *</p>
          <input type="number" name="" id="" />
          <p>Em quantas parcelas *</p>
          <input type="number" name="" id="" />
          <p>Informe o percentual de MDR *</p>
          <input type="number" name="" id="" />
        </form>
      </div>
      <div className='resposta'>
        <h3>VOCÊ RECEBERÁ:</h3> 
        <div className='valor'>
          <p>Amanhã:</p> 
          <p>R$ 0,00</p>
        </div>
        <div className='valor'>
          <p>Em 15 dias:</p> 
          <p>R$ 0,00</p>
        </div>
        <div className='valor'>
          <p>Em 30 dias:</p> 
          <p>R$ 0,00</p>
        </div>
        <div className='valor'>
          <p>Em 90 dias:</p> 
          <p>R$ 0,00</p>
        </div>
      </div>
    </div>
  );
}

export default App;
