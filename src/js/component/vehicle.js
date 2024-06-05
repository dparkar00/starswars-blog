import React, { useState, useEffect, useContext }  from "react";
import vehicleImage from "../../img/vehicle.jpg";
import "../../styles/vehicle.css";

import { Context } from "../store/appContext";

export const Vehicle = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<ul className="list-group list-group-horizontal scroll">
				{store.vehicles.map((vehicle, index) => (
					<li className="list-group-item" key={index}>
						<div className="card">
							<img src={vehicleImage} className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>
								<p className="card-text">model: {vehicle.model}</p>
								<p className="card-text">manufacturer: {vehicle.manufacturer}</p>
								<div className='row d-flex flex-row justify-content-between'>
									<div className='col'>
										<a href={"./vehicles/" + vehicle.name} className="btn btn-primary">Learn more!</a>
									</div>
									<div className='col d-flex flex-row justify-content-end'>
										<a onClick={() => actions.addFavorite(vehicle, 'vehicles')} className="btn btn-primary">favorite</a>
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