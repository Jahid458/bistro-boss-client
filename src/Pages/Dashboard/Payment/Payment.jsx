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
        </div>
    );
};

export default Payment;