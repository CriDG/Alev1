import React, { useState } from 'react'

export default function Registrati() {
    const [utente, setUtente] = useState ('');
    const [pass, setPass] = useState ('');
    const [isRegistrato, setIsRegistrato] = useState ('');
    const [details, setDetails] = useState (false);

    const handleDetails = () => {
        setDetails (prev => !prev);
    };

    function handleUtente (e) {
        setUtente(e.target.value);
    }

    function handlePass (e) {
        setPass (e.target.value)
    }

    function handleRegistrazione (e) {
        alert (`Hola ${utente}`);
        setIsRegistrato (true);
    }


    return (
        <> 
    <div>Registrati</div>
    <label>Utente : </label>
    <input type='text' value = {utente} onChange={handleUtente}/>
    <br />

    <label> Password: </label>
    <input type="password" value={pass} onChange={handlePass} /> 
        <br />

    <button onClick={handleRegistrazione}>
        {
        isRegistrato ?  
        
        'Sei registrato'
        :
        'Registrati!'
        }
    </button>

        <br />
    
    <div> 
    <button onClick={handleDetails}>
        {details ? 'Nascondimi! ' : 'Dettagli...'}
        </button>
        
    {details && 
    <p>ciao come va? </p>
    }
    </div>
    </>
  )
}
