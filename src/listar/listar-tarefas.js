import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function ListarTarefas() {
  const history = useHistory();

  return (
    <Button onClick={() => history.push('/cadastrar')}>Nova Tarefa</Button>
  );
}

export default ListarTarefas;
