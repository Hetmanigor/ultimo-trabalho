// src/App.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Importa o Componente filho
import './App.css'; // Importa o CSS

function App() {
  
  // 3. ESTADO (State)
  // Agora é uma lista de objetos
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  // Função chamada ao clicar em "Adicionar"
  function handleAddTask() {
    if (inputText.trim() === '') return; 
    
    // Cria o NOVO OBJETO de tarefa
    const novaTarefa = {
      texto: inputText,
      completa: false
    };
    
    // ATUALIZA O ESTADO
    setTasks([...tasks, novaTarefa]);
    setInputText('');
  }

  // --- NOVA FUNÇÃO ---
  // Função para EXCLUIR uma tarefa (ela precisa do "índice" de qual excluir)
  function handleDeleteTask(indice) {
    // Cria uma nova lista, filtrando para remover o item com o índice clicado
    const novasTarefas = tasks.filter((_, i) => i !== indice);
    setTasks(novasTarefas);
  }

  // --- NOVA FUNÇÃO ---
  // Função para CONCLUIR uma tarefa (precisa do "índice" de qual alternar)
  function handleToggleComplete(indice) {
    // Cria uma nova lista, usando map
    const novasTarefas = tasks.map((tarefa, i) => {
      // Se for a tarefa que clicamos
      if (i === indice) {
        // Retorna um NOVO objeto com a propriedade "completa" invertida
        return { ...tarefa, completa: !tarefa.completa };
      }
      // Se não for, só retorna a tarefa como ela era
      return tarefa;
    });
    
    setTasks(novasTarefas);
  }

  return (
    <div className="App">
      <header>
        <h1>Minha Lista de Tarefas (React)</h1>
      </header>
      
      <main>
        <div className="input-area">
          <input
            type="text"
            placeholder="O que precisa ser feito"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleAddTask}>Adicionar</button>
        </div>
        
        <div id="app-list">
          {/* Agora, passamos as FUNÇÕES de excluir/concluir
            como PROPRIEDADE para o componente filho.
          */}
          {tasks.map((tarefa, index) => (
            <TodoItem 
              key={index} 
              tarefa={tarefa} // 2. Passa o objeto da tarefa como PROPRIEDADE
              onExcluir={() => handleDeleteTask(index)} // 2. Passa a função como PROPRIEDADE
              onConcluir={() => handleToggleComplete(index)} // 2. Passa a função como PROPRIEDADE
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;