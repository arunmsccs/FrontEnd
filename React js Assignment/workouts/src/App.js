import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';
//import persons from './Person/Person';
//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';
//import userinput from './UserInput/UserInput';
class App extends Component
{
  state={
    persons:[
      {id:'a1',name:'kali',age:23},
      {id:'a2',name:'Logu',age:24},
      {id:'a3',name:'Ashwin',age:22}
    ],
    showPersons:false
  }
  /*handlerEvent=(newName)=>{
    this.setState({persons:[
      {name:newName,age:23},
      {name:'Ashwin',age:24},
      {name:'Kali',age:22}
    ]
  })
  }*/

  nameHandeler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
        return p.id===id;
    });

     const person={
       ...this.state.persons[personIndex]
      };
     //const person=Object.assign({},this.state.persons[personIndex]);
     person.name=event.target.value;
     const persons=[...this.state.persons];
     persons[personIndex]=person;
          
     this.setState({persons:persons}); 

     /*this.setState({persons:[
      {name:'kali',age:23},
      {name:event.target.value,age:24},
      {name:'Kali',age:22}
      ]
     })*/
  }

   deleteHandler=()=>{
     //const persons=this.state.persons.slice();
     const persons=[...this.state.persons];
     persons.splice(persons,1);
     this.setState({persons:persons});
   }

  togglePersonsHandler=()=>{
       const doesShow = this.state.showPersons;
       this.setState({showPersons:!doesShow  });
  }

  render(){
    const style={
            backgroundColor:'white',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            cursor:'poiner'
    };
    let persons=null;
     if (this.state.showPersons)
     {
       persons=(
         <div>
       {this.state.persons.map((person,index) => {
                 return <Person 
                 click={()=>this.deleteHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event)=>this.nameHandeler(event,person.id)}/>
        } )}
            
        </div>
       );
       /* persons=(
        <div>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          /><br></br>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
         change={()=>this.handlerEvent('Kali')}
         changed={this.nameHandeler}>KLalisajfgas</Person><br></br>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        </div>
       );*/
     }
    return (
      <div className="App">
        <h1>Hi I am KingMaker</h1>
          <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
           {persons}                        
      </div>
    );
  }

       // return React.createElement('div',null,React.createElement('h1',null,'This is kali and Kingmaker'));
}

export default App;



