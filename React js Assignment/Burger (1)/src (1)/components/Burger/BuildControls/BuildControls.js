import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const control = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
];

const buildControls = (props) =>
(
     <div className="BuildControls">
         <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
         
         {control.map(ctrl=>(
             <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientsAdded(ctrl.type)}
                remove={() => props.ingredientsRemove(ctrl.type)}/>
         ))}
         <button onClick={props.ordered}
         className="OrderButton"
         disabled={!props.purchasable}>ORDER NOW</button>
     </div>
);

export default buildControls;