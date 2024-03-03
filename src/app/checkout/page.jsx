"use client"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";

const stripePromise = loadStripe(
  `pk_test_51OpyQ3Ab2q5MaE0Cw7vIhdCCMA6eOm0XHqhDgY2DXqk9O88fawMHUN38EXjx7rQXsAeANedJm9XmIXExEo0duMWT000MLGWHdw`
);
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
