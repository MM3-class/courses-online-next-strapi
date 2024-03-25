"use client"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIP_PUBLISHABLE_KEY);
const page = () => {

  const appearance = {
    theme: "stripe",
  };
  const options = {
    appearance,
    mode: "payment",
    currency: "usd",
    amount: 100
  };
  return (
    <div>
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
    </div>
  );
};

export default page;
