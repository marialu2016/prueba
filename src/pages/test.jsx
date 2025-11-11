// import react useState y useEffect
import { useState, useEffect } from 'react'

function Test() {
    const [count, setCount] = useState(0);
    useEffect(function() {
        console.log("El contador cambió a:", count);
    }, [count]);
    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={function() {
                setCount(count + 1)
            }}>Sumar</button>
        </div>
    )
}

export default Test