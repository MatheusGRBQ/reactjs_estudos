import React from 'react';
import Tabela from './components/index';

function App() {

  let peopleFromTheTable = [
    {
      id:1,
      nome:"Matheus",
      value:1,
      description:"Teste1",
    },
    {
      id:2,
      nome:"Adônis",
      value:2,
      description:"Teste2",
    },
    {
      id:3,
      nome:"William",
      value:3,
      description:"Teste3",
    },
    {
      id:4,
      nome:"Cristian",
      value:4,
      description:"Teste4",
    },
    
  ]
  return(
    <div>
      <Tabela id={1} nome="João" value={1} description="Teste" dadosQueVaoNaTabela={peopleFromTheTable}/>
    </div>
  )
}

export default App;