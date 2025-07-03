import { useState } from "react";
import "./ListaTarefas.css";

export default function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState({ texto: "", estado: "pendente" });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarefa.texto.trim() !== "") {
            // Adiciona uma cópia do objeto tarefa
            setTarefas([...tarefas, tarefa]);
            setTarefa({ texto: "", estado: "pendente" }); // reseta input
        }
    };

    const atualizarEstado = (index, novoEstado) => {
        const novasTarefas = tarefas.map((item, i) =>
            i === index ? { ...item, estado: novoEstado } : item
        );
        setTarefas(novasTarefas);
    };

    const excluirTarefa = (index) => {
        const novasTarefas = tarefas.filter((item, i) => i !== index);
        setTarefas(novasTarefas);
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Nome da tarefa" onChange={(e) => setTarefa({ ...tarefa, texto: e.target.value })} value={tarefa.texto}/>
                </label>

                <input type="submit" value="Enviar" />
            </form>

            {tarefas.map((item, index) => (
                <div
                    key={index}
                    className="Tarefa"
                    style={{
                        backgroundColor:
                            item.estado === "pendente"
                                ? "gray"
                                : item.estado === "concluido"
                                ? "lightgreen"
                                : item.estado ==="naoconcluido"
                                ? "lightcoral"
                                : "orange"
                    }}
                >
                    <p style={{ margin: 0 }}>{item.texto}</p>
                    <div>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "concluido")}>
                            ✔
                        </button>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "naoconcluido")}>
                            Não Concluída
                        </button>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "pendente")}>
                            Em Andamento
                        </button>
                        {item.estado ==="confirm" ? <button className="TarefaButton" onClick={() => excluirTarefa(index)}>Confirma?</button>
                            : <button className="TarefaButton" onClick={() => atualizarEstado(index, "confirm")}>Excluir</button>}
                    </div>
                </div>
            ))}

            <button onClick={() => setTarefas([])} style={{ margin: "10px", padding: "5px 10px" }}>
                Resetar
            </button>
        </div>
    );
}
