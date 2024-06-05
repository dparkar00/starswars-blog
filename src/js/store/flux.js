const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: JSON.parse(localStorage.getItem("store")) || {},
		actions: {

			deleteFavorite: (item) => {
				const store = getStore();
				const updatedFavorites = [...store.favorites];
				for (let i = 0; i < updatedFavorites.length; i++)
					{
						if (updatedFavorites[i] == item)
							{
								updatedFavorites.splice(i, 1);
							}
					}
				setStore({favorites: updatedFavorites});
				localStorage.setItem("store", JSON.stringify({
					planets: store.planets,
					people: store.people,
					vehicles: store.vehicles,
					favorites: updatedFavorites
				}));
			},

			addFavorite: (item, itemType) => {
				console.log(item);
				item.type = itemType;
				const store = getStore();
				
				const updatedFavorites = [...store.favorites];
				updatedFavorites.push(item);
				setStore({favorites: updatedFavorites});
				localStorage.setItem("store", JSON.stringify({
					planets: store.planets,
					people: store.people,
					vehicles: store.vehicles,
					favorites: updatedFavorites
				}));
			},

			loadSomeData: async () => {
				async function fetchPlanets()  
				{
					let next = 'https://swapi.dev/api/planets'
					let planets = []
					let count = 0;

					try
					{
						while(next && count < 10)
						{
							const response = await fetch(next);
							const data = await response.json();
							planets.push(...data.results);
							next = data.next;
							count ++;
						}
					}
					catch(error)
					{
						console.error(error);
					}
					finally{
						return planets;
					}
				}

				async function fetchVehicles()  
				{
					let next = 'https://swapi.dev/api/vehicles'
					let vehicles = []
					let count = 0;

					try
					{
						while(next && count < 10)
						{
							const response = await fetch(next);
							const data = await response.json();
							vehicles.push(...data.results);
							next = data.next;
							count ++;
						}
					}
					catch(error)
					{
						console.error(error);
					}
					finally{
						return vehicles;
					}
				}

				async function fetchPeople()  
				{
					let next = 'https://swapi.dev/api/people'
					let people = []
					let count = 0;

					try
					{
						while(next && count < 10)
						{
							const response = await fetch(next);
							const data = await response.json();
							people.push(...data.results);
							next = data.next;
							count ++;
						}
					}
					catch(error)
					{
						console.error(error);
					}
					finally{
						return people;
					}
				}

				if(!localStorage.getItem('store')) {
					const planets = await fetchPlanets();
                    const people = await fetchPeople();
                    const vehicles = await fetchVehicles();

                    setStore({
                        planets: planets,
                        people: people,
                        vehicles: vehicles,
						favorites: []
                    });

					localStorage.setItem("store", JSON.stringify({
                        planets: planets,
                        people: people,
                        vehicles: vehicles,
						favorites: []
                    }));
				}
				console.log('store:');
				console.log(getStore());
			}
		}
	};
};

export default getState;