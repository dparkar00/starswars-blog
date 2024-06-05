import React, { useState, useEffect, useContext }  from "react";



export const Single = ( { item } ) => {

    let entries = []

    for (let [key, value] of Object.entries(item)) {
        entries.push([key, value]);
        console.log(key + ' ' + value);
    }

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center pt-5 mt-5'>
                <div className='col-10'>
                    {entries.map((entry, index) => {
                        console.log(entry);

                        let e = entry[0].replace("_", ' ');
                        if (e == 'residents' || e == 'films' || e == 'created' || e == 'edited' || e == 'url' || e == 'type' || e == 'homeworld' || e == 'species' || e == 'starships' || e =='pilots')
                            {
                                return <></>;
                            }

                        return (
                            <div className='row justify-content-center'>
                                <div className='col-6 d-flex flex-row justify-content-center'>
                                    <h3 key={index}>{e.replace("_", ' ')}:</h3>
                                </div>
                                <div className='col-6 d-flex flex-row justify-content-center'>
                                    <h3>{entry[1]}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            

        </div>
    )
}