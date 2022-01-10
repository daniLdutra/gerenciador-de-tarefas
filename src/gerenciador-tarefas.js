import './gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter';
import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefa from './cadastrar/cadastrar-tarefas';
import AtualizarTarefa from './atualizar/atualizar-tarefa';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  '/atualizar/:id': () => <AtualizarTarefa id={id} />,
};

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
