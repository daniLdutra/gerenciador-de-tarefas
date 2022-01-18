import Proptypes from 'prop-types';
import { useState } from 'react';
import {
  Modal,
  Button,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function RemoverTarefa(props) {
  const [exibirModal, setExibirModal] = useState(false);

  function handleAbrirModal(event) {
    event.preventDefault();
    setExibirModal(true);
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

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
      <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
        <Modal.Header closeButton>
          <ModalTitle>Remover Tarefa</ModalTitle>
        </Modal.Header>
        <ModalBody>
          Deseja realmente remover a seguinte tarefa?
          <br />
          <strong>{props.tarefa.nome}</strong>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="primary"
            onClick={handleRemoverTarefa}
            data-testid="btn-remover"
          >
            Sim
          </Button>
          <Button variant="light" onClick={handleFecharModal}>
            Não
          </Button>
        </ModalFooter>
      </Modal>
    </span>
  );
}

RemoverTarefa.prototype = {
  tarefa: Proptypes.object.isRequired,
  recarregarTarefa: Proptypes.func.isRequired,
};

export default RemoverTarefa;
