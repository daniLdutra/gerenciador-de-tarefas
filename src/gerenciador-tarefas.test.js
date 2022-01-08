import { render, screen } from '@testing-library/react';
import GerenciadorTarefas from './gerenciador-tarefas';

test('deve redenrizar o projeto sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GerenciadorTarefas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
