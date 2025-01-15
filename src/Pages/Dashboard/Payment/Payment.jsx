<<<<<<< HEAD

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import ChekoutForm from "./ChekoutForm";


// Add Publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
               <Elements stripe={stripePromise}>
                    <ChekoutForm></ChekoutForm>

               </Elements>
            </div>
=======
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="please pay to eat"></SectionTitle>

            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
>>>>>>> 3f4b9240728b220fd1f3482ef42d082e0cf1aa25
        </div>
    );
};

export default Payment;