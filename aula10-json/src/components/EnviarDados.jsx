import { useState } from "react";

export default function EnviarDados() {
  const [nomeBiblioteca, setNomeBiblioteca] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`http://127.0.0.1:8000/bibliotecas?nome=${nomeBiblioteca}`, {
            method: "POST"
          });
          

      if (!response.ok) throw new Error("Erro ao cadastrar biblioteca");

      setMensagem("Biblioteca cadastrada com sucesso!");
      setNomeBiblioteca("");
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("Erro ao cadastrar biblioteca.");
    }
  };

  return (
    <div>
      <h2>Cadastrar nova biblioteca</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome da biblioteca:</label><br />
        <input
          type="text"
          value={nomeBiblioteca}
          onChange={(e) => setNomeBiblioteca(e.target.value)}
          required
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
