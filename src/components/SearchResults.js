import React from "react";
import Profile from "./Profle";

export default function SearchResults({ perfiles }) {

    return (
        <div className="my-4">
            <h2 className="text-center mb-4 ml-4">Perfiles</h2>
            {perfiles.length === 0 ? <p className="lead text-center p-5">No hay perfiles que coincidan con tus preferencias. Lo sentimos &#128542;</p> : <></>}
            {perfiles.map((perfil) => {
                return <Profile perfil={perfil} key={perfil.id} />
            })}
        </div>
    );
}