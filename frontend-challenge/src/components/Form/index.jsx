import { Container, Form, Button } from "./style";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const RegisterForm = ({ setvalores }) => {
  const [input, setinput] = useState([]);
  const { register, handleSubmit } = useForm();

  function registerValue(data) {
    setinput(data);
  }

  useEffect(() => {
    Api.post("", {
      amount: input.amount,
      installments: input.installments,
      mdr: input.mdr,
      days: [1, 15, 30, 90],
    })
      .then(function (response) {
        setvalores(Object.values(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [input, setvalores]);

  return (
    <Container>
      <h1>Simule sua Antecipação</h1>

      <Form onSubmit={handleSubmit(registerValue)}>
        <label htmlFor="amount">Informe o valor da venda *</label>
        <input
          type="number"
          name="amount"
          id="amount"
          {...register("amount")}
        />

        <label htmlFor="installments">Em quantas parcelas *</label>
        <input
          type="number"
          name="installments"
          id="installments"
          {...register("installments")}
        />

        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input type="number" name="mdr" id="mdr" {...register("mdr")} />

        {/* <label htmlFor="days">Informar dia que sera antecipado</label>
        <select id="days" name="days" {...register("days")}>
          <option>Amanhã</option>
          <option value={15}>15 dias</option>
          <option value={30}>30 dias</option>
          <option value={90}>90 dias</option>
        </select> */}
        <div className="button">
          <Button type="submit">Cadastrar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterForm;
