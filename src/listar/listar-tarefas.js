import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ListarTarefas() {
  const history = useHistory();

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
      </Table>
    </div>
  );
}

export default ListarTarefas;
