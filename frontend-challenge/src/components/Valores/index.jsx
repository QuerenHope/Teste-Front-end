import { Container } from "./style";

const Valores = ({ valores }) => {
  return (
    <Container>
      <h3>VOCÊ RECEBERÁ:</h3>
      <div className="valor_1">
        <p>Amanhã</p>
        <p>R${valores[0]}</p>
      </div>
      <div className="valor">
        <p>Em 15 dias:</p>
        <p>R${valores[1]}</p>
      </div>
      <div className="valor">
        <p>Em 30 dias:</p>
        <p>R${valores[2]}</p> 
      </div>
      <div className="valor">
        <p>Em 90 dias:</p>
        <p>R${valores[3]}</p>
      </div>
    </Container>
  );
};

export default Valores;
