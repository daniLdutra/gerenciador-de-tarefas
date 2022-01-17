import ReactDOM from 'react-dom';
import ItensListaTarefas from './itens-lista-tarefas';

describe('Teste do componente que exibe um item da listagem de tarefas', () => {
  it('deve redenrizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ItensListaTarefas tarefas={[]} recarregarTarefas={() => false} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
