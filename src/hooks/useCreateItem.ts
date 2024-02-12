import { useState } from "react";

  const useGabriel = (tac: number):[number, (prop:number)=> void] => {
    
      const [estadoAtual, setEstadoAtual] = useState(tac);

      const AtualizaçaoDefunçao = (prop: number) => {
          setEstadoAtual((estAT) => (prop ? estAT + prop : estAT + tac));
      };

      return [estadoAtual, AtualizaçaoDefunçao];
  };

  export default useGabriel;
