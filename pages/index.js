import { useState } from 'react';

//Sem Função
function Home() {

    return (
        <div>
            <h1>Olá mundo!</h1>
            <Contador />
        </div>
    )
}
//Contador
function Contador() {
    const[contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home