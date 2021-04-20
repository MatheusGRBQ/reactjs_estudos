// Função do componente que renderiza uma tabela na tela
function Tabela({dadosQueVaoNaTabela}) {

// Retorno da função renderizado em forma de HTML
  return(
    <div>
    <table>
      {/* Topo da tabela */}
      <thead>
        <tr> 
            {/* Primeira linha */}
          <td>IDENTIFICATION</td>
          <td>KEY</td>
          <td>NAME</td>
          <td>DESCRIPTION</td>
        </tr>
      </thead>
      <tbody>
      {/* Mapeia a propriedade designada a função e exibe cada um dos itens na tela!  */}
      {dadosQueVaoNaTabela && dadosQueVaoNaTabela.map( item => (
          // Informa o key da linha na tabela obs: esse key deve ser uma informação unica na listagemte (geralmente é o id)
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.key}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
      ))
      }
      </tbody>
    </table>
    </div>
  )
}

// Exporta o componente
export default Tabela;