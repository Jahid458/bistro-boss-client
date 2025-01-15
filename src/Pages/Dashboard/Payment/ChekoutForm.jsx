import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useEffect } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import useCart from "../../../hooks/useCart";

const ChekoutForm = () => {
    const [error, setError] = useState();
    const [clientSecret,setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(()=>{
       axiosSecure.post('/create-payment-intent',{price: totalPrice})
       .then( res =>{
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
       })
    },[axiosSecure,totalPrice])

  const handleSubmit = async (event) => {

    event.preventDefault();
    if(!stripe || !elements){
        return
    }

    const card = elements.getElement(CardElement)
    if(card === null){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        console.log('Payment Error', error);
        setError(error.message)
    }
    else{
        console.log('Payment Method', paymentMethod);
        setError('')
    }

  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-700">{error}</p>
    </form>
  );
};

export default ChekoutForm;
