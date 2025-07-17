import { useState, useEffect } from 'react';

export default function RepoJson() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  function handleColor(){
    const cor = ["#000000", "#111111", "#222222", "333333",];
    const randomColor = cor[Math.floor(Math.random() * cor.length)];
    document.body.style.backgroundColor = randomColor;

  }
  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/ProfIuriSouza/React_PIU/profile'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setDados(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchUsuarios();
  }, []); // O array vazio garante que o efeito execute apenas uma vez

  if (loading) {
    handleColor()
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {dados.map(dado => (
          <li key={dado.id}>{dado.name}</li>
        ))}
      </ul>
    </div>
  );
}