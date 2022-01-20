import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import ItensListaTarefas from './itens-lista-tarefas';
import Paginacao from './paginacao';

function ListarTarefas() {
  const history = useHistory();

  const ITENS_POR_PAGINA = 3;

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItens, setTotalItens] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    function obterTarefas() {
      const tarefasDb = localStorage['tarefas'];
      let listarTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      setTotalItens(listarTarefas.length);
      setTarefas(
        listarTarefas.splice(
          (paginaAtual - 1) * ITENS_POR_PAGINA,
          ITENS_POR_PAGINA
        )
      );
      // console.log(listarTarefas);
    }
    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas, paginaAtual]);

  function handleMudarPagina(pagina) {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  }

  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>
      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <Button
                onClick={() => history.push('/cadastrar')}
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa"
              >
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; Nova Tarefa
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          <ItensListaTarefas
            tarefas={tarefas}
            recarregarTarefas={setCarregarTarefas}
          />
        </tbody>
      </Table>
      <Paginacao
        totalItens={totalItens}
        itensPorPagina={ITENS_POR_PAGINA}
        paginaAtual={paginaAtual}
        mudarPagina={handleMudarPagina}
      />
    </div>
  );
}

export default ListarTarefas;
