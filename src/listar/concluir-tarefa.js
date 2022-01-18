import { useState } from 'react';
import Proptypes from 'prop-types';
import {
  Modal,
  Button,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

function ConcluirTarefa(props) {
  const [exibirModal, setExibirModal] = useState(false);

  function handleAbrirModal(event) {
    event.preventDefault();
    setExibirModal(true);
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

  function handleConcluirTarefa(event) {
    event.preventDefault();
    const tarefasDb = localStorage['tarefas'];
    let tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
    tarefas = tarefas.map((tarefa) => {
      if (tarefa.id === props.tarefa.id) {
        tarefa.concluida = true;
      }
      return tarefa;
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
    setExibirModal(false);
    props.recarregarTarefas(true);
  }

  return (
    <span className={props.className}>
      <Button
        className="btn-sm"
        onClick={handleAbrirModal}
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Button>
      <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
        <ModalHeader closeButton>
          <ModalTitle>Concluir Tarefa</ModalTitle>
        </ModalHeader>
        <ModalBody>
          Deseja realmente concluir a seguinte tarefa?
          <br />
          <strong>{props.tarefa.nome}</strong>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="primary"
            onClick={handleConcluirTarefa}
            data-testid="btn-concluir"
          >
            Sim
          </Button>
          <Button
            variant="light"
            onClick={handleFecharModal}
            data-testid="btn-fechar-modal"
          >
            Não
          </Button>
        </ModalFooter>
      </Modal>
    </span>
  );
}

ConcluirTarefa.prototype = {
  tarefa: Proptypes.object.isRequired,
  recarregarTarefas: Proptypes.func.isRequired,
  className: Proptypes.string.isRequired,
};

export default ConcluirTarefa;
