import { useState, useEffect } from 'react';

export default function RepoJson() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [tipo, setTipo] = useState('name');

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
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

  return (
    <div>
      <h2>Lista de usuários:</h2>
      <div>
        <button onClick={() => setTipo('name')}>Mostrar nomes</button>
        <button onClick={() => setTipo('username')}>Mostrar usernames</button>
        <button onClick={() => setTipo('address')}>Mostrar endereços</button>
      </div>

      <ul>
        {dados.map(dado => (
          tipo === 'name' && <li style={{listStyleType: 'decimal'}} key={dado.id}>{dado.name}</li> ||
          tipo === 'username' && <li style={{listStyleType: ''}} key={dado.id}>{dado.username}</li> ||
          tipo === 'address' && <li style={{listStyleType: 'square'}} key={dado.id}>{`${dado.address.street}, ${dado.address.city}`}</li>
        ))}
      </ul>
    </div>
  );
}
