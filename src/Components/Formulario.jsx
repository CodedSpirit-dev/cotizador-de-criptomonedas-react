import styled from "@emotion/styled";
import { useEffect } from "react";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../Hooks/useSelectMonedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const respuesta = await fetch(url);

      const resultado = await respuesta.json();
    };
    consultarAPI();
  }, []);

  return (
    <form>
      <SelectMonedas />
      {moneda}
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
