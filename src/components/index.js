import React, {useState} from 'react';

function Tabela({id, nome, value, description, dadosQueVaoNaTabela}) {

let dados = [id, nome, value, description];

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>VALUE</th>
        <th>DESCRIPTION</th>
      </tr>
      <tbody>
      { dadosQueVaoNaTabela && dadosQueVaoNaTabela.map(
        item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.value}</td>
            <td>{item.description}</td>
          </tr>
          )
      )}
      </tbody>

    </table>
  )
}

export default Tabela;