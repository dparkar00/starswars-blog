import React, { useState, useEffect, useContext }  from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import { Planet } from "../component/planets.js";
import { People} from "../component/people.js";
import { Vehicle } from "../component/vehicle.js";
import { Favorites } from "../component/favorites.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className='container-fluid'>
			{store.planets && (
			<div>
				<div className='row justify-content-center'>
					<div className='col-10'>
						<div className='row d-flex justify-content-between py-3'>
							<div className='col-3'>
								<h2>Star Wars</h2>
							</div>
							<div className='col-3 d-flex justify-content-end'>
								<Favorites/>
							</div>
						</div>
						<div className='row'>
							<div className='col-12 scrollmenu'>
								<h3> Planets </h3>
								<Planet/>
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-12 scrollmenu'>
								<h3> People </h3>
								<People/>
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-12 scrollmenu'>
								<h3> Vehicles </h3>
								<Vehicle/>
							</div>
						</div>
					</div>
				</div>
			</div>
			)}
			{!store.planets && <p>Loading. please wait</p>}
		</div>
	)
};