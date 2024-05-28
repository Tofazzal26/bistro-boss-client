import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_GATE_WAY_KEY);
const Payment = () => {
  return (
    <div>
      <div className="text-center my-12">
        <h1 className="text-4xl font-semibold">PAYMENT</h1>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
