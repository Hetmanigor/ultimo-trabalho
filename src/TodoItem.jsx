// src/TodoItem.jsx
import React from 'react';

// 1. Este é o COMPONENTE "TodoItem"
// Ele recebe o objeto "tarefa" e as funções via "props"
function TodoItem(props) {
  
  // Vamos definir uma classe CSS se a tarefa estiver completa
  const itemClasse = props.tarefa.completa 
                      ? 'task-item completed' 
                      : 'task-item';
  
  return (
    // 2. Usando a PROPRIEDADE "completa" para mudar o estilo
    <div className={itemClasse}>
      
      {/* 2. Usando a PROPRIEDADE "texto" */}
      <span>{props.tarefa.texto}</span>
      
      <div className="task-buttons">
        {/* 2. Usando as PROPRIEDADES de função no onClick */}
        <button className="btn-concluir" onClick={props.onConcluir}>
          {props.tarefa.completa ? 'Desfazer' : 'Concluir'}
        </button>
        
        <button className="btn-excluir" onClick={props.onExcluir}>
          Excluir
        </button>
      </div>
      
    </div>
  );
}

export default TodoItem;