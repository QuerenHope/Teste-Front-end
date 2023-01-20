import { Container } from "./style";

const Valores = ({ valores }) => {
  return (
    <Container>
      <h3>VOCÊ RECEBERÁ:</h3>
      <div className="valor_1">
        <p>Amanhã</p>
        {valores ? <p>R$00,00</p> : <p>R${valores[0]}</p>}
      </div>
      <div className="valor">
        <p>Em 15 dias:</p>
        {!valores ? <p>R${valores[1]}</p> : <p>R$00,00</p>}
      </div>
      <div className="valor">
        <p>Em 30 dias:</p>
        {!valores ? <p>R${valores[2]}</p> : <p>R$00,00</p>}
      </div>
      <div className="valor">
        <p>Em 90 dias:</p>
        {!valores ? <p>R${valores[3]}</p> : <p>R$00,00</p>}
      </div>
    </Container>
  );
};

export default Valores;
