import React, { useState, useEffect, useContext }  from "react";

import { Context } from "../store/appContext";

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	
	return (
        <div className='dropdown'>
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
            </a>

            <ul className='dropdown-menu'>
                {store.favorites && store.favorites.map((item, id) => {
                    return (
                        <li className='dropdown-item' key={id}>
                            <a className='link-offset-2 link-underline link-underline-opacity-0 me-3' href={'./' + item.type + '/' + item.name}>{item.name}</a>
                            <button onClick={() => actions.deleteFavorite(item)}>x</button>
                        </li>
                    )
                })}
            </ul>
        </div>
	)
};