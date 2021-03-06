import React ,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDINT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}

class BurgerBuilder extends Component
{
    /*constructor(props){
        super(props);
        this.state = {...}
}*/
    state = {
         ingredients:{
             salad:0,
             bacon:0,
             cheese:0,
             meat:0
         },
         totalPrice:4,
         purchasable:false,
         purchasing:false
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey]
        })
        .reduce((sum,el)=>{
            return sum + el;
        },0);
        this.setState({purchasable:sum > 0});
    }

    addIngredients = (type) =>
    {
       const oldcount=this.state.ingredients[type];
       const updatedCounted=oldcount+1;
       const updatedIngredients={
           ...this.state.ingredients
       };
       updatedIngredients[type]=updatedCounted;
       const priceAddition=INGREDINT_PRICES[type];
       const oldPrice=this.state.totalPrice;
       const newPrice=oldPrice+priceAddition;
       this.setState({totalPrice : newPrice,ingredients:updatedIngredients})
       this.updatePurchaseState(updatedIngredients);
    }

    removeIngredinets = (type) =>
    {
        const oldcount=this.state.ingredients[type];
        if(oldcount<=0){
            return;
        }
        const updatedCounted=oldcount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCounted;
        const priceDedution=INGREDINT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDedution;
        this.setState({totalPrice : newPrice,ingredients:updatedIngredients})
    }

    purchaseHandler=()=>{
              this.setState({purchasing:true});
    }
    
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }

    purchaseContinuelHandler = () =>
    {
        alert ('You Continue !');
    }
    
    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients}
                            purchaseCancel={this.purchaseCancelHandler}
                            purchaseContinue={this.purchaseContinuelHandler}/></Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientsAdded={this.addIngredients}
                ingredientsRemove={this.removeIngredients}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                disabled={disabledInfo}
              />
            </Aux>
        );
    }
}
export default BurgerBuilder;