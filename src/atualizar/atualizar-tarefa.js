import Button from '@restart/ui/esm/Button';
import Proptypes, { func } from 'prop-types';
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function AtualizarTarefa() {
  const history = useHistory();

  function voltar(event) {
    event.preventDefault();
    history.push('/');
  }

  return (
    <div>
      <h3 className="text-center">Atualizar</h3>
      <Container>
        <Form noValidate>
          <FormGroup>
            <FormLabel>Tarefa</FormLabel>
            <FormControl
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              data-testid="txt-tarefa"
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
            <Link href="/" className="btn btn-light" onClick={voltar}>
              Voltar
            </Link>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

AtualizarTarefa.propTypes = {
  id: Proptypes.number.isRequired,
};
export default AtualizarTarefa;
