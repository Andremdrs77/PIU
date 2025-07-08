import { useState } from "react";
import "./ListaTarefas.css";

export default function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState({ texto: "", estado: "andamento" , data_criacao: new Date()});
    const [tarefasFiltradas, setTarefasFiltradas] = useState(tarefas)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarefa.texto.trim() !== "") {
            const novasTarefas = [...tarefas, tarefa]
            setTarefas(novasTarefas)
            setTarefa({ ...tarefa, texto: "", estado: "andamento" })
            setTarefasFiltradas(novasTarefas)
        }
    };

    const atualizarEstado = (index, novoEstado) => {
        const novasTarefas = tarefas.map((item, i) =>
            i === index ? { ...item, estado: novoEstado } : item
        );
        setTarefas(novasTarefas)
        setTarefasFiltradas(novasTarefas)
    };
    
    const atualizarFiltro = (tipoFiltro) => {
        if (tipoFiltro === "all") {
            setTarefasFiltradas(tarefas)
        } else if (tipoFiltro === "concluido") {
            setTarefasFiltradas(tarefas.filter(trf => trf.estado === "concluido"))
        } else if (tipoFiltro === "andamento"){
            setTarefasFiltradas(tarefas.filter(trf => trf.estado === "andamento"))
        } else if (tipoFiltro === "naoiniciado"){
            setTarefasFiltradas(tarefas.filter(trf => trf.estado === "naoiniciado"))
        }
    };

    const excluirTarefa = (index) => {
        const novasTarefas = tarefas.filter((item, i) => i !== index);
        setTarefas(novasTarefas);
        setTarefasFiltradas(novasTarefas);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Nome da tarefa" onChange={(e) => setTarefa({ ...tarefa, texto: e.target.value })} value={tarefa.texto}/>
                </label>

                <input type="submit" value="Enviar" />

                
            </form>

            {tarefas.length > 0 && (
        <div style={{ marginTop: "15px" }}>
            <button onClick={() => atualizarFiltro("concluido")}>Filtrar por concluídas</button>
            <button onClick={() => atualizarFiltro("andamento")}>Filtrar por em andamento</button>
            <button onClick={() => atualizarFiltro("naoiniciado")}>Filtrar por não iniciadas</button>
            <button onClick={() => atualizarFiltro("all")}>Remover filtro</button>
        </div>
            )}

            {tarefasFiltradas.map((item, index) => (
                <div
                    key={index} className="Tarefa"
                    style={{
                        backgroundColor:
                            item.estado === "andamento"
                                ? "gray"
                                : item.estado === "concluido"
                                ? "lightgreen"
                                : item.estado ==="naoiniciado"
                                ? "lightcoral"
                                : "orange"
                    }}>
                    <p style={{ margin: 0 }}>{item.texto} - {new Date(item.data_criacao).toLocaleString("pt-BR")}</p>
                    <div>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "concluido")}>
                            ✔
                        </button>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "naoiniciado")}>
                            Não Iniciadas
                        </button>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "andamento")}>
                            Em Andamento
                        </button>
                        {item.estado ==="confirm" ? <button className="TarefaButton" onClick={() => excluirTarefa(index)}>Confirma?</button>
                            : <button className="TarefaButton" onClick={() => atualizarEstado(index, "confirm")}>Excluir</button>}
                    </div>
                </div>
            ))}

            {tarefas.length > 0 && (
            <button onClick={() => {setTarefas([]); setTarefasFiltradas([])}} style={{ margin: "10px", padding: "5px 10px" }}>
                Resetar
            </button>
            )}
        </div>
    );
}