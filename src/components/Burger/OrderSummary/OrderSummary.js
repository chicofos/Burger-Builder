import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate = () => {
      console.log('[Order Summary] will update')
    }
    
    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey => {
                return (
                    <li key={ingKey}>
                        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:{this.props.ingredients[ingKey]}
                    </li>
                )
            });

        return(
            <Auxi>
                <h3>Your Order:</h3>
                <p>A delicious burger with the following ingredients:</p>
                {ingredientSummary}
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancel} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.purchaseContinue} btnType='Success'>CONTINUE</Button>
            </Auxi>
        );
    }
}

export default OrderSummary;