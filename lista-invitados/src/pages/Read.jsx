import { useEffect, useState } from 'react';
import { getPersons } from '../app/api';

const Read = () => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        getPersons().then(guests => {
            setGuests(guests.data);
        });
    }, []);
    console.log(guests)
    return (
        <div>
            <h1>Read</h1>
            <div>
                {
                    
                    guests?.map(guest => <p key={guest.id}>{guest.id} - {guest.nom} - {guest.edat}</p>)
                }
            </div>
        </div>
    )
}

export default Read;