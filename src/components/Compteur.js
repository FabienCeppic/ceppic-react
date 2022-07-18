import { useState } from "react";

export default function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
          <p>Vous avez appuyé sur le bouton ci dessous {count} fois</p>
          {count >= 50 ? <p>Ah oui quand même, Minsc est impressioné !</p> : <p></p>}
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}