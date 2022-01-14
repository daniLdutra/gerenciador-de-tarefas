import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Container,
  Button,
  ModalTitle,
  Modal,
  ModalBody,
  ModalFooter,
} from 'react-bootstrap';
import React from 'react';
// import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

function CadastrarTarefa() {
  const history = useHistory();

  return (
    <div>
      <h3 className="text-center">Cadastrar</h3>
      <Container>
        <Form>
          <FormGroup>
            <FormLabel>Tarefa</FormLabel>
            <FormControl
              className="form-control"
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
            />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres
            </Form.Control.Feedback>
          </FormGroup>
          <FormGroup className="text-center">
            <Button type="submit" variant="success">
              Cadastrar
            </Button>
            &nbsp;
            <Button onClick={() => history.push('/')}>Voltar</Button>
          </FormGroup>
        </Form>
        <Modal show={true}>
          <ModalHeader closeButton>
            <ModalTitle>Sucesso</ModalTitle>
          </ModalHeader>
          <ModalBody>Tarefa adicionada com sucesso</ModalBody>
          <ModalFooter>
            <Button variant="success">Continuar</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
}

export default CadastrarTarefa;
