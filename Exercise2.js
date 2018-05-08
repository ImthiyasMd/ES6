const data = {
  price : 1000,
  tax : 10
}

let calculatePrice = ({price, tax, discount=10}) => {      
      taxablePrice = price - (price * (discount / 100));
    	priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));
      console.log(`Total Price ${priceWithTax}`);
}
calculatePrice(data);