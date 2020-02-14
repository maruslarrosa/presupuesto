import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({agregarNuevoGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const [mensajeError, actualizarMensajeError] = useState('');

    const agregarGasto = e =>{
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            actualizarMensajeError(setearMensajeError());
            return;
        }
        guardarError(false);
        actualizarMensajeError('');

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        agregarNuevoGasto(gasto);
        guardarNombre('');
        guardarCantidad(0);
    }

    const setearMensajeError = () => {
        if(nombre.trim() === '' || cantidad.trim === '') return "Ambos campos son obligatorios";
        else if(cantidad < 1 || isNaN(cantidad)) return "La cantidad debe ser mayor a 1."
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agregá tus gastos aquí</h2>
            {error ? (<Error mensaje={mensajeError} />) : null}

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej: Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                ></input>
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                ></input>
            </div>

            <input 
                type="submit"
                className="u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
}

export default Formulario;