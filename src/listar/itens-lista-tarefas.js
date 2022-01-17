import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ItensListaTarefas(props) {
  const history = useHistory();

  return props.tarefas.map((tarefa) => (
    <tr key={tarefa.id} data-testid="tarefa  ">
      <td width="75%" data-testid="nome-tarefa">
        {tarefa.nome}
      </td>
      <td className="text-right">
        <Button
          onClick={() => history.push('/atualizar/' + tarefa.id)}
          className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </td>
    </tr>
  ));
}

ItensListaTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ItensListaTarefas;
