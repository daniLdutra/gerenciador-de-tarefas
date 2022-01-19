import { Pagination } from 'react-bootstrap';
import Proptypes from 'prop-types';

function Paginacao(props) {
  function gerarPrimeiroItem() {
    return (
      <Pagination.First
        key="pagFirst"
        onClick={() => props.mudarPagina(1)}
        disabled={props.paginaAtual === 1}
      />
    );
  }

  function obterPaginacao() {
    let itens = [];
    itens.push(gerarPrimeiroItem());
    return itens;
  }

  return <Pagination data-testid="paginacao">{obterPaginacao()}</Pagination>;
}

Paginacao.propTypes = {
  totalItens: Proptypes.number.isRequired,
  itensPorPagina: Proptypes.number.isRequired,
  paginaAtual: Proptypes.number.isRequired,
  mudarPagina: Proptypes.func.isRequired,
};

export default Paginacao;
