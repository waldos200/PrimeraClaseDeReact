// React moderno contempla Hooks
import React, { useState } from 'react';

const Componente = (props) => {
    
    // const school = "DEV.F";
    //     Estado  setter
    const [school, setSchool] = useState('DEV.F');

    return (
        <div>
            <h1>Nombre: {props.name} </h1>
            <h3>Programa: {props.program} </h3>
            <p>Batch: {props.batch} </p>
            <small>{school}</small>
            <button onClick={() => setSchool('Get Hacky')}>Accion</button>
        </div>
    );
}

export default Componente;
