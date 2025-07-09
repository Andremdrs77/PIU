import { useState } from "react";
import "./ListaTarefas.css";

export default function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState({ texto: "", estado: "andamento", data_criacao: new Date() });
    const [tarefasFiltradas, setTarefasFiltradas] = useState(tarefas);
    const [focoIndex, setFocoIndex] = useState(null);
    const [tema, setTema] = useState("escuro");

    document.body.classList.remove("tema-claro", "tema-escuro");
    document.body.classList.add(`tema-${tema}`);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarefa.texto.trim() !== "") {
            const novasTarefas = [...tarefas, tarefa];
            setTarefas(novasTarefas);
            setTarefa({ ...tarefa, texto: "", estado: "andamento" });
            setTarefasFiltradas(novasTarefas);
            setFocoIndex(null);
        }
    };

    const atualizarEstado = (index, novoEstado) => {
        const novasTarefas = tarefas.map((item, i) =>
            i === index ? { ...item, estado: novoEstado } : item
        );
        setTarefas(novasTarefas);
        setTarefasFiltradas(novasTarefas);
    };

    const atualizarFiltro = (tipoFiltro) => {
        if (tipoFiltro === "all") {
            setTarefasFiltradas(tarefas);
        } else {
            setTarefasFiltradas(tarefas.filter(trf => trf.estado === tipoFiltro));
        }
        setFocoIndex(null);
    };

    const excluirTarefa = (index) => {
        const novasTarefas = tarefas.filter((item, i) => i !== index);
        setTarefas(novasTarefas);
        setTarefasFiltradas(novasTarefas);
        if (focoIndex === index) setFocoIndex(null);
    };

    const alternarTema = () => {
        const novoTema = tema === "claro" ? "escuro" : "claro";
        setTema(novoTema);

        document.body.classList.remove("tema-claro", "tema-escuro");
        document.body.classList.add(`tema-${novoTema}`);
    };

    return (
        <div className="container">
            <button className="temaButton" onClick={alternarTema}>
                Tema: {tema === "claro" ? "☀️ Claro" : "🌙 Escuro"}
            </button>

            <div className={focoIndex !== null ? "Unfocused" : ""}>
                <h1>Lista de Tarefas</h1>

                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            id="tarefaInput"
                            type="text"
                            placeholder="Nome da tarefa"
                            onChange={(e) => setTarefa({ ...tarefa, texto: e.target.value })}
                            value={tarefa.texto}
                        />
                    </label>
                    <input id="enviarButton" type="submit" value="Enviar" />
                </form>

                {tarefas.length > 0 && (
                    <div style={{ marginTop: "15px" }}>
                        <button className="TarefaButton" onClick={() => atualizarFiltro("concluido")}>Filtrar por concluídas</button>
                        <button className="TarefaButton" onClick={() => atualizarFiltro("andamento")}>Filtrar por em andamento</button>
                        <button className="TarefaButton" onClick={() => atualizarFiltro("naoiniciado")}>Filtrar por não iniciadas</button>
                        <button className="TarefaButton" style={{outline: 'none'}} onClick={() => atualizarFiltro("all")}>Remover filtro</button>
                    </div>
                )}
            </div>

            {tarefasFiltradas.map((item, index) => (
                <div
                    key={index}
                    className={focoIndex !== null && focoIndex !== index ? "Unfocused" : ""}
                    style={{ display: "flex" }}
                >
                    <button
                        className="FocusButton"
                        onClick={() => {
                            if (focoIndex === null || focoIndex !== index) {
                                setFocoIndex(index);
                            } else {
                                setFocoIndex(null);
                            }
                        }}
                    >
                        {'>'}
                    </button>

                    <div
                        className="Tarefa"
                        style={{
                            backgroundColor:
                                item.estado === "andamento"
                                    ? "gray"
                                    : item.estado === "concluido"
                                        ? "lightgreen"
                                        : item.estado === "naoiniciado"
                                            ? "lightcoral"
                                            : "orange"
                        }}
                    >
                        <p style={{ margin: 0 }}>
                            {item.texto} - {new Date(item.data_criacao).toLocaleString("pt-BR")}
                        </p>
                        <div>
                            <button className="TarefaButton" onClick={() => atualizarEstado(index, "concluido")}>Concluída</button>
                            <button className="TarefaButton" onClick={() => atualizarEstado(index, "naoiniciado")}>Não Iniciada</button>
                            <button className="TarefaButton" onClick={() => atualizarEstado(index, "andamento")}>Em Andamento</button>
                            {item.estado === "confirm"
                                ? <button className="TarefaButton" onClick={() => excluirTarefa(index)}>Confirma?</button>
                                : <button className="TarefaButton" onClick={() => atualizarEstado(index, "confirm")}>Excluir</button>}
                        </div>
                    </div>
                </div>
            ))}

            {tarefas.length > 0 && (
                <button
                    className="TarefaButton"
                    onClick={() => {
                        setTarefas([]);
                        setTarefasFiltradas([]);
                        setFocoIndex(null);
                    }}
                    style={{ margin: "10px", padding: "5px 10px" }}
                >
                    Resetar
                </button>
            )}
        </div>
    );
}
