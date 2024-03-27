// Exemplo de useEffect hook
import { useEffect, useState } from "react";

export function UseEffectExemple() {
  const [value, setValue] = useState("Valor Inicial"); // Um estado string
  const [checked, setChecked] = useState(false); // Um estado booleano

  useEffect(() => {
    console.log("Mudei por causa do useEffect");
  }, [value, checked]); //Chamamos de array de dependências onde recebe o value que o user digitar
  // só vai mandar o console log caso React perceber que value ou checked mudou
  return (
    <div className="effect">
      <h2>Usando useEffect na Prática</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
}
