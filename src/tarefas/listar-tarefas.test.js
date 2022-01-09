import { ReactDOM } from 'react-dom';
import ListarTarefas from './listar-tarefas';

describe('teste de componente de listagem de tarefas', () => {
  it('deve redenrizar o componente sem erros', () => {
    const div = document.createElement(
      'div',
      ReactDOM.render(<ListarTarefas />, div)
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
