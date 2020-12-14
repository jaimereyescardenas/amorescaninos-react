import React, { useState, useEffect } from "react";
import fetchResourceAndSetState, {BASE_URL} from "../utils/data";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function MainApp() {

    const [ perfilState, setPerfilState ]  = useState([]);
    
    const [ selectedEdad, setSelectedEdad ] = useState("0");
    const [ selectedRaza, setSelectedRaza ] = useState("0");
    const [ selectedCaract, setSelectedCaract ] = useState("0");
    const [ selectedGenero, setSelectedGenero ] = useState("Todos");

    const filterPerfiles = function(selectedEdad, selectedGenero, selectedRaza, selectedCaract) {
        fetch(`${BASE_URL}/rest/perfil/search`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                caracteristica: selectedCaract,
                raza: selectedRaza,
                genero: selectedGenero,
                edad: selectedEdad
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
          .then(resp => resp.json())
          .then(resp => setPerfilState(resp.list));
    }

    useEffect(() => {
        fetchResourceAndSetState(`${BASE_URL}/rest/perfil/list`, setPerfilState);
    }, []);

    useEffect(() => {
        filterPerfiles(selectedEdad, selectedGenero, selectedRaza, selectedCaract);
    }, [ selectedEdad, selectedGenero, selectedRaza, selectedCaract]);

    return (
        <main className="wrapper p-3 mx-auto">
            <div>
				<p>“Amores Caninos” es una iniciativa creada con el objetivo de
					generar un espacio en donde nuestros amigos de raza canina puedan
					encontrar a esa pareja que les haga sentir como perro con dos
					colas. Si estás buscando la pareja perfecta para tu compañero canino, ¡estás en el lugar indicado!</p>
			</div>
            <SearchBar 
              selectedEdad={selectedEdad}
              selectedGenero={selectedGenero}
              selectedRaza={selectedRaza}
              selectedCaract={selectedCaract}
              setSelectedEdad={setSelectedEdad} 
              setSelectedGenero={setSelectedGenero}
              setSelectedRaza={setSelectedRaza}
              setSelectedCaract={setSelectedCaract}
            /> 
            <SearchResults perfiles={perfilState}/>
        </main>
    );
}