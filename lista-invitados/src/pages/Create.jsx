import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePersonName } from "../app/api";

const Create = () => {
    const navigate = useNavigate();
    const [nom, setNombre] = useState('');
    const [edat, setEdat] = useState(0);
    return (
        <div>
            <h1>Create</h1>
            <p>
                <input type="text" placeholder='Guest Name' onChange={e => setNombre(e.target.value)} />
                <input type="number" placeholder='Guest Age' onChange={e => setEdat(e.target.value)} />
                <button onClick={async () => {
                    await savePersonName({ nom , edat});

                    navigate('/');
                }}>Create</button>
            </p>
        </div>
    )
}

export default Create;