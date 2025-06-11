import { useState } from "react"

export default function Dropdown (props) {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setOpen(!open)}>{open ? "Fechar" : "Abrir"}</button>
            {open &&
                <ul>
                    {props.children}
                </ul>
            }
        </div>
    )
}