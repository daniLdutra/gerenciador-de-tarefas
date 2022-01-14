import './gerenciador-tarefas.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefa from './cadastrar/cadastrar-tarefas';
import AtualizarTarefa from './atualizar/atualizar-tarefa';

// const routes = {
//   '/': () => <ListarTarefas />,
//   '/cadastrar': () => <CadastrarTarefa />,
//   '/atualizar/:id': ({ id }) => <AtualizarTarefa id={id} />,
// };

function GerenciadorTarefas() {
  return (
    <>
      <Router>
        <Route path="/cadastrar" exact component={CadastrarTarefa} />
        <Route path="/atualizar/:id" exact component={AtualizarTarefa} />
        <Route path="/" exact component={ListarTarefas} />
      </Router>
    </>
  );
}

export default GerenciadorTarefas;
