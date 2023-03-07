import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}


function App() {
    const [animals, setAnimals] = useState([]);
    
    const handleCLick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className='app'>
            <button onClick={handleCLick}>
                Add Animal
            </button>
            <div className='animal-list'>{renderedAnimals}</div>

            {/* <button onClick={() => console.log('button was clicked!')}>
                Add Animal
            </button> */}

        </div>
    )
}

export default App;