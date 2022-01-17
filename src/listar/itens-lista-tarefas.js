import PropTypes from 'prop-types';
import { FontAwsemoIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';


function ItensListaTarefas(props) {
  return()
}

ItensListaTarefas.prototype = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ItensListaTarefas;
