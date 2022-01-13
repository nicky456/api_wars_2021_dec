import React from 'react'
import {useState} from 'react'
import axios from 'axios'


function Residents({planet}){
    const [residents, setResidents] = useState([])

    const getResidents = async () => {
        const newArray = []
            for (const resident of planet.residents) {
                const response = await axios.get(resident)
                newArray.push(response)
            }
        setResidents(newArray)
    }

    React.useEffect(() => {
        getResidents();
      }, []);

    console.log(residents)

    return(
        <div className="residentsPopUp">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair color</th>
                        <th>Skin color</th>
                        <th>Eye color</th>
                        <th>Birth year</th>
                        <th>Gender</th>
                    </tr>
                {residents.map((resident) => 
                    <tr>
                        <td>{resident.data.name}</td>
                        <td>{resident.data.height}</td>
                        <td>{resident.data.mass}</td>
                        <td>{resident.data.hair_color}</td>
                        <td>{resident.data.skin_color}</td>
                        <td>{resident.data.eye_color}</td>
                        <td>{resident.data.birth_year}</td>
                        <td>{resident.data.gender}</td>
                    </tr>
                )}
                </table>
                {residents.map((resident) => 
                <ul>
                <li>
                    <b><u>Name: {resident.data.name}</u></b>
                </li>
                    <ul>
                        <li><b>Height: </b>{resident.data.height}</li>
                        <li><b>Mass: </b>{resident.data.mass}</li>
                        <li><b>Hair color: </b>{resident.data.hair_color}</li>
                        <li><b>Skin color: </b>{resident.data.skin_color}</li>
                        <li><b>Eye color: </b>{resident.data.eye_color}</li>
                        <li><b>Birth year: </b>{resident.data.birth_year}</li>
                        <li><b>Gender: </b>{resident.data.gender}</li>
                    </ul>
            </ul>
                )}
        </div>
    )
}

export default Residents;