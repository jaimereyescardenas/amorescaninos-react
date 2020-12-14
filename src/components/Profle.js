import React from "react";

export default function Profile( {perfil} ) {
    return (
        <div className="perfil-wrapper border border-secondary rounded p-3 my-2 mx-sm-auto mx-2">
				<div className="media">
		  			<div className="media-body">
		    			<h5 className="mt-0 mb-1 mr-auto">{perfil.nombre} <small className="font-weight-normal">{perfil.raza.nombre}</small></h5>
		    			<span>{perfil.genero}, {perfil.edad} años</span>
		    			<div>
		    				<p><em>{perfil.frase}</em></p>
		    				<p>
                                {perfil.caracteristicas.map(caract => {
									return <span className="badge badge-pill badge-info" key={caract.id}>{caract.nombre}</span>
								})}
							</p>
		    			</div>
		  			</div>
	  			<img className="d-flex ml-3 rounded" alt={perfil.nombre} src={perfil.urlImagen} width="100" />
				</div>
			</div>
    );
}