import Button from '@restart/ui/esm/Button';
import Proptypes from 'prop-types';
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

function AtualizarTarefa(props) {
  const history = useHistory();

  const [tarefa, setTarefa] = useState('');
  const [exibirModal, setExibirModal] = useState(false);
  const [formValidado, setFormValiado] = useState(false);
  const [carregarTarefa, setCarregarTarefa] = useState(true);

  useEffect(() => {
    const { id } = props.match.params;
    const tarefasDb = localStorage['tarefas'];
    const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
    const tarefa = tarefas.filter((t) => t.id === parseInt(id))[0];

    setTarefa(tarefa.nome);
    setCarregarTarefa(false);
  }, [carregarTarefa, props]);

  function voltar(event) {
    event.preventDefault();
    history.push('/');
  }

  function handleFecharModal() {
    history.push('/');
  }

  function atualizar(event) {
    event.preventDefault();
    setFormValiado(true);
    if (event.currentTarget.checkValidity() === true) {
      //obtem as tarefas

      //persistir a tarefa atualizada
      setExibirModal(true);
    }
  }
  function handleTxtTarefa({ target }) {
    setTarefa(target.value);
  }

  return (
    <div>
      <h3 className="text-center">Atualizar</h3>
      <Container>
        <Form onSubmit={atualizar} noValidate validated={formValidado}>
          <FormGroup>
            <FormLabel>Tarefa</FormLabel>
            <FormControl
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              data-testid="txt-tarefa"
              value={tarefa}
              onChange={handleTxtTarefa}
            ></FormControl>
            <FormControl.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </FormControl.Feedback>
          </FormGroup>
          <FormGroup className="text-center">
            <Button
              className="btn btn-success"
              type="submit"
              data-testid="btn-atualizar"
            >
              Atualizar
            </Button>
            &nbsp;
            <Link to="/" className="btn btn-secondary" onClick={voltar}>
              Voltar
            </Link>
          </FormGroup>
        </Form>
        <Modal
          show={exibirModal}
          onHide={handleFecharModal}
          data-testid="modal"
        >
          <ModalHeader closeButton>
            <ModalTitle>Sucesso</ModalTitle>
          </ModalHeader>
          <ModalBody>Tarefa atualizada com sucesso</ModalBody>
          <ModalFooter>
            <Button className="btn btn-success" onClick={handleFecharModal}>
              Continuar
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
}

AtualizarTarefa.propTypes = {
  props: Proptypes.object,
};
export default AtualizarTarefa;
