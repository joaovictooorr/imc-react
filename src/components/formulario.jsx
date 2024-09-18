import { useState } from "react";

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const renderizaResultado = () => {
        const imc = peso / (altura * altura);

        if (imc <= 18.5) {
            return (
                <p>Você está magro</p>
            );
        } else if (imc > 18.5 && imc <= 24.9) {
            return (
                <p>Você está no peso ideal</p>
            );
        } else if (imc >= 25 && imc <= 29.9) {
            return (
                <p>Você está com sobrepeso</p>
            );
        } else if (imc >= 30.0 && imc <= 39.9) {
            return (
                <p>Você está obeso</p>
            );
        } else {
            return (
                <p>Você está com obesidade grave</p>
            );
        }
    }

    return (
        <form>
            <input type="number" placeholder="Altura" onChange={evento => setAltura(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Peso" onChange={evento => setPeso(parseFloat(evento.target.value))} />
            {renderizaResultado()}
        </form>
    );
}

export default Formulario;