import React from 'react';
import './TinderCards.css';
import { useState,useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import axios from './axios';


const TinderCards = () => {
    //using states to keep track of cards of pictures of celebrities 
    //from this, a state can contain an array of images

    const [people,setPeople]=useState([]);
    //we are using the useEffect in the array methos in order to link to the database
    useEffect(()=>{
async function fetchData(){
    const req = await axios.get('/tinder/cards');
    setPeople(req.data);
}
fetchData();
    },[])

    const swiped = (direction,nameToDelete)=>{
        console.log('removing:'+nameToDelete);
       // setLastDirection(direction);
    }; 
    
const outOfFrame = (direction,nameToDelete)=>{
        console.log('removing:'+nameToDelete);
        //setLastDirection(direction);
    };
    return ( 
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
            {people.map((person)=>(<TinderCard 
            className='swipe' 
            key={person.name}
             preventSwipe={["up","down"]} 
             onSwipe={(dir)=>swiped(dir,person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
            >
<div
style={{backgroundImage:`url(${person.imgUrl})`}}
className="card"
>
    <h3>{person.name}</h3>

</div>
            </TinderCard>)
)}
            </div>
</div>
     );
}
 
export default TinderCards;