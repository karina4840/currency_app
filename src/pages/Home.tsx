import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import StepCard from "../components/StepCard";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      image: "assets/money.png",
      title: "Select Currencies",
      description:
        "Choose your base currency and target currency from our comprehensive list",
    },
    {
      image: "assets/calculator.png",
      title: "Enter Amount",
      description:
        "Input the amount you want to convert with real-time validation",
    },
    {
      image: "assets/chart.png",
      title: "Get Results",
      description:
        "Instantly see your converted amount with current exchange rates",
    },
  ];

  return (
    <div className="min-h-screen w-full theme-bg-primary px-10 pt-10 pb-32 lg:pt-32 lg:pb-10 flex-col items-center justify-center">
      {/* Header spacer for desktop */}

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold theme-text-primary mb-4">
          Currency Converter
        </h1>
        <p className="text-xl theme-text-secondary mb-8 max-w-2xl mx-auto">
          Instantly convert currencies using up-to-date exchange rates from
          reliable sources
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/converter")}
            size="lg"
            className="text-lg px-8 py-3"
            variant="primary"
          >
            Start Converting
          </Button>
          <Button
            onClick={() => {
              navigate("/currencies");
            }}
            variant="secondary"
            size="lg"
            className="text-lg px-8 py-3"
          >
            View Currencies
          </Button>
        </div>
      </div>

      {/* How It Works */}
      <div className="theme-card rounded-lg p-8 mb-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold theme-text-primary text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <StepCard
                key={i}
                image={step.image}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold theme-text-primary mb-4">
          Ready to Start Converting?
        </h2>
        <p className="text-lg theme-text-secondary mb-8">
          Join thousands of users who trust our currency converter for accurate,
          real-time rates.
        </p>
        <Button
          onClick={() => navigate("/converter")}
          size="lg"
          className="text-xl px-10 py-4"
        >
          Convert Now
        </Button>
      </div>
    </div>
  );
};

export default Home;
