import React, { useState } from 'react';
import './App.css';
import Person from'./Person/Person';
//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';
//import userinput from './UserInput/UserInput';
const appp = props => {
 const [personsState,setPeronsState]= useState({
    persons:[
      { name:'kali',age:'23' },
      { name:'Logu',age:'23' },
      { name:'Ahwin ',age:'23' }
   ]
  });
  console.log(personsState);
  const click = () =>{
    setPeronsState({
      persons:[
       { name:'Ashwin',age:'23' },
      { name:'Kali',age:'23' },
      { name:'Logu ',age:'23' }
    ]
    });
    };
    return (
      <div className="Appp">
        <h1>Hi I am KingMaker</h1>
          <button onClick={click}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
          
      </div>
    );
       // return React.createElement('div',null,React.createElement('h1',null,'This is kali and Kingmaker'));
    }

export default appp;
