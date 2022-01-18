import Proptypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function RemoverTarefa(props) {
  return (
    <span>
      <Button
        variant="danger"
        className="btn-sm"
        onClick={handleAbrirModal}
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </span>
  );
}

RemoverTarefa.prototype = {
  tarefa: Proptypes.object.isRequired,
  recarregarTarefa: Proptypes.func.isRequired,
};

export default RemoverTarefa;
