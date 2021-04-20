// Campos do parametro: id, chave, valor, descrição
import { useEffect, useState } from 'react';
import ExibirDadosDoParametro from '../tabelaDeDados/';

function Cadastro() {

  const [id, setId] = useState("");
  const [chave, setChave] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [parametro, setParametro] = useState({});
  useEffect(() => {
    console.log("Executou o useEffect")
  }, [id,chave,valor,descricao])

  function setDadosParametro() {
    setParametro({
      id:id,
      chave:chave,
      valor:valor,
      descricao:descricao,
    })

    console.log(document.getElementById("chave").getAttribute)

  }
  return (
    <div>
      <form>
      <div>
        <br/>
        <label>ID : </label>
        <br/>
        <input type="text" id="id" size="40" onChange={ ({target}) => {setId(target.value)}}></input>
        <br/>
        <label>CHAVE : </label>
        <br/>
        <input type="text" id="chave" size="40" onChange={ ({target}) => {setChave(target.value)}}></input>
        <br/>
        <label>VALOR : </label>
        <br/>
        <input type="text" id="valor" size="40" onChange={ ({target}) => {setValor(target.value)}}></input>
        <br/>
        <label>DESCRIÇÃO: </label>
        <br/>
        <input type="text" id="descrição" size="40" onChange={ ({target}) => {setDescricao(target.value)}}></input>
      </div>
      </form>
      <br/>
      <div>
      <button onClick={setDadosParametro}>Imprimir Dados</button>
    </div>
      <ExibirDadosDoParametro parametro={parametro}/>
      {/* <Tabela/> */}
      {/* <Botao/> */}
    </div>
  )
};

export default Cadastro;

