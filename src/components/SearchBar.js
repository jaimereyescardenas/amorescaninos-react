import React, { useState, useEffect } from "react";
import fetchResourceAndSetState, {BASE_URL} from "../utils/data";

export default function SearchBar({ 
    selectedEdad,
    selectedGenero,
    selectedRaza,
    selectedCaract,
    setSelectedEdad,
    setSelectedGenero,
    setSelectedRaza,
    setSelectedCaract }) {

    const [razaState, setRazaState ]  = useState([]);
    const [edadState, setEdadState ]  = useState([]);
    const [generoState, setGeneroState ]  = useState([]);
    const [caractState, setCaractState ]  = useState([]);

    const onChangeHandler = (setState, event) => {
        setState(event.target.value);
    }

    const resetFilters = function() {
        setSelectedEdad('0');
        setSelectedRaza('0');
        setSelectedCaract('0');
        setSelectedGenero('Todos');
    }

    useEffect(() => {

        fetchResourceAndSetState(`${BASE_URL}/rest/raza/list`, setRazaState);
        fetchResourceAndSetState(`${BASE_URL}/rest/edad/list`, setEdadState);
        fetchResourceAndSetState(`${BASE_URL}/rest/carac/list`, setCaractState);
        fetchResourceAndSetState(`${BASE_URL}/rest/genero/list`, setGeneroState);

    }, []);

    return (
        <>
            <h2 className="text-center mb-4 ml-4">Búsqueda de perfiles</h2>
            <div className="form-wrapper my-2 mx-auto">
                <div>
                    <button className="btn btn-block btn-secondary my-3" onClick={resetFilters}>Reiniciar filtros</button>
                </div>
                <div className="form-group">
                    <label htmlFor="raza">Raza</label>
                    <select className="form-control" name="raza-id" id="raza" value={selectedRaza} onChange={(e) => onChangeHandler(setSelectedRaza, e)}>
                        <option value="0" key="0">Todas</option>
                        {razaState.map((raza) => {
                            return <option value={raza.id} key={raza.id}>{raza.nombre}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="genero">Género</label>
                    <select className="form-control" name="genero" id="genero" value={selectedGenero} onChange={(e) => onChangeHandler(setSelectedGenero, e)}>
                        <option value="Todos" key="0">Todos</option>
                        {generoState.map((genero) => {
                            return <option value={genero} key={genero}>{genero}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="edad">Edad</label>
                    <select className="form-control" name="edad" id="edad" value={selectedEdad} onChange={(e) => onChangeHandler(setSelectedEdad, e)}>
                        <option value="0" key="0">Todas</option>
                        {edadState.map((edad) => {
                            return <option value={edad} key={edad}>{edad}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="caracteristica">Característica</label>
                    <select className="form-control" name="caracteristica-id" id="caracteristica" value={selectedCaract} onChange={(e) => onChangeHandler(setSelectedCaract, e)}>
                        <option value="0" key="0">Todas</option>
                        {caractState.map((caract) => {
                            return <option value={caract.id} key={caract.id}>{caract.nombre}</option>
                        })}
                    </select>
                </div>
            </div>
        </>
    );
}