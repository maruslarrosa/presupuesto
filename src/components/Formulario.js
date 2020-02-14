import React from 'react';

const Formulario = () => {
    return (
        <form>
            <h2>Agregá tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej: Transporte"
                ></input>
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 300"
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