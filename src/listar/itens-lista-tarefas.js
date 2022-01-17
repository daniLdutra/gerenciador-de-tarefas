import PropTypes, { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../index.css';

function ItensListaTarefas(props) {
  const history = useHistory();

  return props.tarefas.map((tarefa) => (
    <tr key={tarefa.id} data-testid="tarefa  ">
      <td
        width="75%"
        data-testid="nome-tarefa"
        style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}
      >
        {tarefa.nome}
      </td>
      <td className="text-right">
        {!tarefa.concluida && (
          <Button
            onClick={() => history.push('/atualizar/' + tarefa.id)}
            className="btn btn-warning btn-sm"
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        )}
      </td>
    </tr>
  ));
}

ItensListaTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ItensListaTarefas;
