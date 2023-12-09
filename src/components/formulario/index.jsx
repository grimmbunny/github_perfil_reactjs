import { useState, useEffect } from "react"

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('');
    
    useEffect(() =>  {
        console.log("o componente iniciou")

        return () => {
            console.log("o componente finalizou")
        }
    }, [])


    useEffect(() =>  {
        console.log("o nome mudou")
    }, [nome])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;


        if (media >= 7) {
            return (
                <p>{nome} Good</p>
            )
        } else {
            return ( 
                <p>{nome} Doomed</p>
            )
        }
    }
    

    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
            <li key={item}>{item}</li>
            
            ))}
            </ul>

            <input type="text" placeholder="Nome" onChange={alteraNome} />
            <input type="number" placeholder="nota 1" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="nota 2" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota 3" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
        {renderizaResultado()}

        </form>
    )
}

export default Formulario