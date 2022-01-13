import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Residents from './Residents';
import axios from 'axios';


function PlanetTable(){
    const [planetNum, setPlanetNum] = React.useState(1);
    const [planets, setPlanets] = React.useState([]);
    const [nextBtn, setNextBtn] = React.useState(false);

    const getData = async (planetNum) => {
        const response = await axios.get(
            `http://localhost:8000/api/planets/${planetNum}`
        );
        if (response.data !== false) {
            setPlanets(response.data);
        } else {
            setNextBtn(true);
        }
    };

    const prevBtn = ()=>{
        if (nextBtn){
            setPlanetNum(planetNum -2)
            setNextBtn(false)
        }else{
        setPlanetNum(planetNum - 1)
        setNextBtn(false)
        }
    }

    React.useEffect(() => {
        getData(planetNum);
    }, [planetNum]);

    return(
        <div>
            <div className="header-h1">
                <h1>Star Wars universe planets</h1>
            </div>
            <div className="buttons">
                <button disabled={planetNum === 1 ? true : false} onClick={prevBtn}>Previous</button>
                <button disabled={nextBtn} onClick={() => setPlanetNum(planetNum + 1)}>Next</button>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Diameter</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Surface Water <br/> Percentage</th>
                    <th>Population</th>
                    <th>Residents</th>
                    
                </tr>
                {planets.map((planet) => 
                    <tr>
                        <td>{planet.name}</td>
                        <td>{planet.diameter}</td>
                        <td>{planet.climate}</td>
                        <td>{planet.terrain}</td>
                        <td>{planet.surface_water ==="unknown" ? planet.surface_water : planet.surface_water + " %"}</td>
                        <td>{planet.population ==="unknown" ? planet.population : planet.population.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " people"}</td>
                        <td>{planet.residents.length === 0 ? 
                            <p>No known residents</p> 
                            : 
                            <Popup 
                                trigger={<button>{planet.residents.length + " resident(s)"}</button>}
                                modal 
                                nested
                            > 
                                {close => (
                                    <div className="modal">
                                        <div className="modal-head">
                                            <h3>Residents of {planet.name} </h3>
                                            <button className="close-x" onClick={close}>&times;</button>
                                        </div>
                                        <Residents planet={planet}/>
                                        <div className="actions">
                                            <button className="close"
                                                onClick={close}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        }</td>
                    </tr>
                )}
            </table>
            
            {planets.map((planet) => 
            <ul>
                <li>
                    <b><u>Name: {planet.name}</u></b>
                </li>
                    <ul>
                        <li><b>Diameter: </b>{planet.diameter}</li>
                        <li><b>Climate: </b>{planet.climate}</li>
                        <li><b>Terrain: </b>{planet.terrain}</li>
                        <li><b>Surface Water %: </b>{planet.surface_water ==="unknown" ? planet.surface_water : planet.surface_water + " %"}</li>
                        <li><b>Population: </b>{planet.population ==="unknown" ? planet.population.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : planet.population.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " people"}</li>
                        <li><b>Residents: </b>{planet.residents.length === 0 ? 
                            <p>No known residents</p> 
                            : 
                            <Popup 
                                trigger={<button>{planet.residents.length + " resident(s)"}</button>}
                                modal 
                                nested
                            > 
                                {close => (
                                    <div className="modal">
                                        <div className="modal-head">
                                            <h3>Residents of {planet.name} </h3>
                                            <button className="close-x" onClick={close}>&times;</button>
                                        </div>
                                        <Residents planet={planet}/>
                                        <div className="actions">
                                            <button className="close"
                                                onClick={close}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        }</li>
                    </ul>
            </ul>
            )}
        </div>
    )
}

export default PlanetTable;