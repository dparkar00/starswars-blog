import React, { useState, useEffect, useContext }  from "react";
import planetImage from "../../img/planet.jpg";
import "../../styles/planet.css";

import { Context } from "../store/appContext";

export const Planet = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<ul className="list-group list-group-horizontal">
				{store.planets.map((planet, index) => (
					<li className="list-group-item" key={index}>
						<div className="card">
							<img src={planetImage} className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<p className="card-text">climate: {planet.climate}</p>
								<p className="card-text">population: {planet.population}</p>
								<p className="card-text">orbital period: {planet.orbital_period}</p>
								<div className='row d-flex flex-row justify-content-between'>
									<div className='col'>
										<a href={"./planets/" + planet.name} className="btn btn-primary">Learn More!</a>
									</div>
									<div className='col d-flex flex-row justify-content-end'>
										<a onClick={() => actions.addFavorite(planet, 'planets')} className="btn btn-primary">favorite</a>
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
};