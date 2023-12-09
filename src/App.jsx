import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/RepoList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
  <>
  <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario} endereco="https://github.com/grimmbunny.png"/>
      <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    { /* ctrl + ; para comentario react, dentro do return*/}

    {/* {formularioEstaVisivel && (
       <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
  </>
  )
}

export default App
