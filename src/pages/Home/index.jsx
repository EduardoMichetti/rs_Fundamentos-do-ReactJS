 /* quando queremos que uma variável interfira na interface precisamos usar o  STATE*/
 /* useEffect é para 
 Estrutura do useEffect:::    
      useEffect(() => {
        // corpo do useEffect          
        é executado assim que os componentes são executados
        console.log("useEffect foi chamado");
      },[se tiver um estado aqui ele tbem vai ser executado toda vez que o estado for chamado.]) */
 import React, { useState, useEffect } from 'react';
 import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
    /*primeiro é o nome da variável onde o conteúdo vai ficar armazenado.
  segundo SET a função que atualiza este estado.*/
  const [studentName, setStudentName] = useState(/*'valor inicial'*/); /*dentro de const pode ser qualquer nome*/
  const [estudantes, setEstudantes] = useState([]); /*esta constante esta declarada como um vetor(lista ...
    ...que vai armazenar os dados dos estudantes*/

  const[user, setUser] = useState({nome_git: '', avatar: ''});  

  function handleAddEstudante(){
    const newEstudante = {
      nome: studentName,
      horaAtual: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
      })
    };
    /*setEstudantes([newEstudante]) desta forma toda vez que adiciona ele sobrescreve o anterior*/
    /*Necessário usar os 3 pontos para que ele puxe o conteúdo e adiciona dentro do vetor, senão ele fica
    criando novos vetores dentro de outros vetores
    exe:
    // ['Rodrigo]
    // [['Rodrigo], Amanda]
    //para evitar isso usamos os três pontos antes
    */ 
    setEstudantes(conteudoAnterior => [...conteudoAnterior, newEstudante])    
  }

  /*FORMA PADRÃO DE USAR O useEffect*/ 
  /*
  useEffect(() => {
    fetch('https://api.github.com/users/eduardomichetti')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  },[]) 
  */
   /*FORMA ASSÍNCRONA DE CHAMAR O useEffect*/
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/eduardomichetti')
      const data = await response.json();
      console.log("DADOS ===> ", data); /*para exibir no console tudo que trouxe da API*/ 

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });

      
    }
    /*NA PARTE DE CIMA CRIAMOS A FUNÇÃO ASSÍNCRONA AGORA VAMOS CHAMAR ELA*/  
    fetchData();
  },[]);


  return (/*alt foto de perfil é um texto alternativo para quando não carregar a imagem exibir ele*/
    <div className='container' >
      <header>
       
        <h1>Lista de Presença</h1>        
        
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />          
        </div>
      </header>
      
      <input 
        type="text"  
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddEstudante}>Adicionar</button>

      {
        /*map serve para percorrer todos itens que existe na lista*/
        /*"estudante é uma variável que para cada item da lista vai receber e renderizar o card"*/
        /*estudantes.map(estudante => <Card name={estudante.nome} time={estudante.horaAtual}/>)*/
        /*forma de cima esta correta mas vamos usar de uma forma melhor usando uma chave ú<nica></nica>*/
        estudantes.map(estudante => 
          <Card 
          /*toda vez que usarmos uma estrutura de repetição como o map, precisamos identificar
          uma chave primária (key) única para ganha de performance pq toda alteração gera uma nova
          renderização em todos elementos da página.
          obs: a data não é o ideal pq podem ocorrer duplicidades em registros adicionados rapidamente mas 
          já atende*/
            key={estudante.horaAtual}
            name={estudante.nome} 
            time={estudante.horaAtual}
          />)          
      }
    </div>
  )
}


