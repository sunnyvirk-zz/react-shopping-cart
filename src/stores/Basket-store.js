import Reflux from 'reflux';
import _ from 'lodash';
import BasketActions from '../actions/Basket-actions';

let basketCounter = 0;
let localStorageKey = "basket";

export default Reflux.createStore({

	listenables: [BasketActions],

	onAddItem(item) {
		var itemExists = _.where(this.basket, item);
        if (_.where(this.basket, item).length > 0) {
			this.basket.forEach(function(basketItem, i){
				if(basketItem.id === itemExists.id){
					BasketActions.increaseItem(i);
				}
			});
        } else {
	        this.updateBasket([{
	        	key: basketCounter++,
			    title: item.title,
			    price: item.price,
			    qty: 1
	        }].concat(this.basket));
        }
	},

	onRemoveItem() {},

	onIncreaseItem(index) {
		this.basket[index].qty++;
	},

	onDecreaseItem() {},

    updateBasket(basket){
        localStorage.setItem(localStorageKey, JSON.stringify(basket));
        this.basket = basket;
        this.trigger(basket);
    },

	getInitialState() {
		let loadedBasket = localStorage.getItem(localStorageKey);

		if (!loadedBasket) {
			this.basket = [];
		} else {
			this.basket = _.map(JSON.parse(loadedBasket), function(item) {
				item.key = basketCounter++;
				return item;
			});
		}
		return this.basket;
	}

});
