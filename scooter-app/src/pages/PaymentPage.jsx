import PaymentForm from '../components/payment';
import ScooterNavbar from '../components/navbar';
import FooterPage from '../components/footer';

const PaymentPage = () => {
  return (
    <div className="">
      <ScooterNavbar />
      <div className="p-14">
        <PaymentForm />
      </div>
      <FooterPage />
    </div>
  );
};

export default PaymentPage;
