// Exemplo de useState hook
import { useState } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);
  const [string, setString] = useState("Dan");
  //   const [valorAtual, setValorAtual] = useState(0);

  //   Agora sem usar o hook
  //   let countNotHook = 0;

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setString("Dan tem contagem: " + count); // Dessa forma temos um problemas que ele sepre irá pegar o valor anterior do count por isso parece não estar atualizando.
    // DESAFIO: COMO RESOLVER ESSE BO?

    // Sem Hook
    // countNotHook += 1;
  };

  return (
    <div className="counter">
      <h2>Contador usando Hook useState</h2>
      <p>Contagem: {count} </p>
      <p>Nome: {string} </p>
      {/* <p>Contagem: {countNotHook} </p> */}
      <button onClick={increment}>Adicionar</button>
    </div>
  );
}

export default CounterFunction;
