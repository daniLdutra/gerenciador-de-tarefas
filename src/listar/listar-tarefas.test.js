import ReactDOM from 'react-dom';
import ListarTarefas from './listar-tarefas';
import Tarefa from '../models/tarefa.models';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

describe('teste de componente de listagem de tarefas', () => {
  const nomePrimeiraTarefa = 'Primeira tarefa';
  const nomeSegundaTarefa = 'Segunda tarefa';
  const nomeTerceiraTarafa = 'Terceira tarefa';

  beforeEach(() => {
    localStorage['tarefas'] = JSON.stringify([
      new Tarefa(1, nomePrimeiraTarefa, false),
      new Tarefa(2, nomeSegundaTarefa, false),
      new Tarefa(3, nomeTerceiraTarafa, false),
    ]);
  });

  afterEach(() => {
    delete localStorage['tarefas'];
  });

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('deve exibir uma tabela contendo 3 tarefas', () => {
    const { getByTestId } = render(<ListarTarefas />);
    const tabela = getByTestId('tabela');
    expect(tabela).toHaveTextContent(nomePrimeiraTarefa);
    expect(tabela).toHaveTextContent(nomeSegundaTarefa);
    expect(tabela).toHaveTextContent(nomeTerceiraTarafa);
  });
});
