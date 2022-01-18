import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import ConcluirTarefa from './concluir-tarefa';
import Tarefa from '../models/tarefa.models';
import '@testing-library/jest-dom/extend-expect';
import { propTypes } from 'react-bootstrap/esm/Image';


describe('Teste do componente de conclusão de tarefas', ()=>{
  const nomeTarefa = 'Tarefa de teste',
  const tarefa = Tarefa(1, nomeTarefa, false);

  it('deve renderizar o componente sem erros', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<ConcluirTarefa
    tarefa={tarefa}
    recarregarTarefa={()=> false}/>, div)
    ReactDOM.unmountComponentAtNode(div)
    });
  });