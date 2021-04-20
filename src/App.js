import React from 'react';
// Importa o componente Tabela
import Tabela from './components/index';
import Cadastro from './components/cadastroParametro/index';

// Função que passa os valores aos itens dentro do array e cria os itens a serem renderizados pelo componente

function App() {
  
  // Variavel que denomina itens a serem exibidos (Em forma de lista de objetos)
  let itemsTabela = [
    {
      id:1,
      key:1,
      name:"Matheus",
      description:"Junior",
    },
    {
      id:2,
      key:2,
      name:"Cris",
      description:"Pleno",
    },
    {
      id:3,
      key:2,
      name:"Adônis",
      description:"Sênior",
    },
    {
      id:4,
      key:2,
      name:"Will",
      description:"Sênior",
    },
  ];
  // Retorna o componente renderizando em forma de tag HTML juntamente com os propriedades
  return (
    <div>
      <Tabela dadosQueVaoNaTabela={itemsTabela}/>
      <Cadastro/>
    </div>
  )
}

// Exporta o componente App
export default App;