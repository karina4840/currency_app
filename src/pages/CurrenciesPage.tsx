import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CurrencyGrid from "../components/CurrencyGrid";

const CurrenciesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen theme-bg-primary px-10 pt-10 pb-32 lg:pt-32 lg:pb-10">

      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">
            Available Currencies
          </h1>
          <p className="text-lg theme-text-secondary mb-8">
            All currencies available for conversion from our exchange rate API
          </p>
          <Button
            onClick={() => navigate('/converter')}
            variant="primary"
            size="lg"
            className="mb-8"
          >
            Go to Converter
          </Button>
        </div>

        {/* Currency Grid */}
        <CurrencyGrid />
      </div>
    </div>
  );
};

export default CurrenciesPage;
