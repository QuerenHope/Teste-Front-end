import { Container, Form, Button } from "./style";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const formSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Deve ser um número")
    .min(1000, "Deve ser maior ou igual a 1000")
    .max(99999999, "Deve ser menor ou igual que 99999999")
    .required("Campo Obrigatório"),
  installments: yup
    .number()
    .typeError("Deve ser um número")
    .min(1, "Mínimo de 1 parcela")
    .max(12, "Máximo de 12 parcelas")
    .required("Campo Obrigatório"),
  mdr: yup
    .number()
    .typeError("Deve ser um número")
    .min(1, "Deve ser maior ou igual a 1")
    .max(100, "Deve ser menor ou ingual a 100")
    .required("Campo Obrigatório"),
});

const RegisterForm = ({ setvalores }) => {
  const [input, setinput] = useState([]);
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(formSchema) });

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
        <span className="error1">{errors.amount?.message}</span>

        <label htmlFor="installments">Em quantas parcelas *</label>
        <input
          type="number"
          name="installments"
          id="installments"
          {...register("installments")}
        />
        <span className="error2">{errors.installments?.message}</span>

        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input type="number" name="mdr" id="mdr" {...register("mdr")} />
        <span className="error3">{errors.mdr?.message}</span>

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
