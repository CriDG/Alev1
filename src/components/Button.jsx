import  { useState } from 'react'

export default function Button ({descrizione, messaggio}) {
 const [showDetails, setShowDetails] = useState(false);

 const handleClick = () => {
    setShowDetails (prev => !prev);
 };
 
 
    return (
    <>
   <div>
    <button onClick={handleClick}>{descrizione}</button>
    {showDetails && <p>{messaggio}</p> }
    </div> 
    </>
  )
}
