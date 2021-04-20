function ExibirDadosDoParametro({parametro}) {

  return(
    <div>
      <br/>
      {parametro.id}
      <br/>
      {parametro.chave}
      <br/>
      {parametro.valor}
      <br/>
      {parametro.descricao}
    </div>
  )
}

export default ExibirDadosDoParametro;