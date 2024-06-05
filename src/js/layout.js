import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single.js";
import injectContext from "./store/appContext";

import { Context } from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	
	const { store, actions } = useContext(Context);

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						{store.planets && store.planets.map((planet, index) => (
							
							<Route key={index} path={'/planets/' + planet.name + '/'} element={<Single item={planet}/>} />
							
						))}
						{store.people && store.people.map((person, index) => (
							
							<Route key={index} path={'/people/' + person.name + '/'} element={<Single item={person}/>} />
							
						))}
						{store.vehicles && store.vehicles.map((vehicle, index) => (
							
							<Route key={index} path={'/vehicle/' + vehicle.name + '/'} element={<Single item={vehicle}/>} />
							
						))}
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);