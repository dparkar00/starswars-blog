import React, { useState, useEffect, useContext }  from "react";
import personImage from "../../img/person.jpg";
import "../../styles/person.css";

import { Context } from "../store/appContext";

export const People = () => {
    const { store, actions } = useContext(Context);

	return (
		<div>
			<ul className="list-group list-group-horizontal scroll">
				{store.people.map((person, index) => (
					<li className="list-group-item" key={index}>
						<div className="card">
							<img src={personImage} className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<p className="card-text">gender: {person.gender}</p>
								<p className="card-text">skin color: {person.skin_color}</p>
								<div className='row d-flex flex-row justify-content-between'>
									<div className='col'>
										<a href={"./people/" + person.name} className="btn btn-primary">Learn More!</a>
									</div>
									<div className='col d-flex flex-row justify-content-end'>
										<a onClick={() => actions.addFavorite(person, 'people')} className="btn btn-primary">favorite</a>
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