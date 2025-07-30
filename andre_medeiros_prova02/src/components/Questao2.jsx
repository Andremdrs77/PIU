import { useState, useEffect } from 'react';

export default function RepoJson() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [busca, setBusca] = useState('')

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(' https://jsonplaceholder.typicode.com/albums'); 
        const data = await response.json(); 
        setDados(data); 
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchUsuarios();
  }, []); 

  if (loading) {
    return <p>Carregando...</p>;
  }

  const limparFiltro = () => {
    dadosFiltrados = []
  }

  const dadosFiltrados = dados.filter(dado => 
    dado.userId == busca)

  return (
    <div>
        <form onSubmit={limparFiltro}>
            <label>
                userId: 
                <input type="number" value={busca} onChange={(e) => setBusca(e.target.value)}/>
            </label>
            <input type="submit" value='Reiniciar'/>
        </form>
        <ul>
            {dadosFiltrados.map(dado => (
                <li key={dado.userId}>{dado.title}</li>
            ))}
        </ul>
    </div>
  );
}

