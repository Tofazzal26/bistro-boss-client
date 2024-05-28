import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./../../hooks/AxiosSecure/useAxiosSecure";
import useCart from "./../../hooks/useCart/useCart";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [Error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState();
  const { user } = useContext(AuthContext);

  const totalPrice = cart.reduce(
    (item, total) => item + parseInt(total.price),
    0
  );

  useEffect(() => {
    const totalPrice = cart.reduce(
      (item, total) => item + parseInt(total.price),
      0
    );
    if (totalPrice > 0) {
      axiosSecure
        .post(`/create-payment-intent`, { price: parseInt(totalPrice) })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, cart]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Stripe Error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Payment Error");
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.id),
          transactionId: paymentIntent.id,
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment Post Data", res.data);
        if (res.data.paymentResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks For Payment",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div>
      <div className="lg:w-[990px] mx-auto">
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
          <div className="text-center my-12">
            <button
              className="bg-[#570DF8] py-[10px] text-white lg:w-[400px] rounded-md font-semibold"
              type="submit"
              disabled={!stripe || !clientSecret}
            >
              Pay
            </button>
            <span className="text-red-500">{Error}</span>
            {transactionId && (
              <p className="text-green-600">
                Your Transaction Id :{transactionId}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
