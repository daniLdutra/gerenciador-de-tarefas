function Tarefa(id, nome, concluida) {
  (this.nome = nome), (this.id = id), (this.concluida = concluida);

  return {
    id,
    nome,
    concluida,
  };
}

export default Tarefa;
