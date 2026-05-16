import { useState, useEffect } from "react";
import { Hello } from "./components/Hello";

function App() {
  // useEffect permite controlar/detectar o ciclo de vida de um componente
  useEffect(()=>{
    console.log("O componente foi montado");
  }, []);// [] = array vazio é o onLoad do componente

  // dispara uma funcao quando muda o valor de userState
  useEffect(()=>{
    console.log("O estado do usuário mudou para: ", userState);
  }, [userState]);
  // inicializei um estado com o valor inicial false
  // desconstrução de array
  const [userState, setUserState] = useState(false);
  // neste momento, userState está com valor false

  /*
    setTimeout(function(){
      // estou logando o meu usuário
      setUserState(true);
    }, 5000);
  */

  return <Hello setUserState={setUserState} isLogged={userState} username="Jaison" />;
}

export default App
