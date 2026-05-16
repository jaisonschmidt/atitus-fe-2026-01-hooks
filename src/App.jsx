import { useState } from "react";
import { Hello } from "./components/Hello";

function App() {
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
