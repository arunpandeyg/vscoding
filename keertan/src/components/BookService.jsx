import Footer from "./Footer";
import Header from "./Header";
import WhatsAppButton from "./WhatsAppButton";

function BookService() {
  return (
    <div className="bg-orange-200">
      <div>
        <Header />
      </div>
      <h1 className="text-[30px] p-5 text-center justify-center text-bold text-orange-700">
        Book Keertan Jagrata Chauki
      </h1>
      <div>
        {/* whatsapp integration */}
        <div className="text-center text-2xl text-orange-700 my-5">
          <h1>Welcome to My App</h1>
          <WhatsAppButton />
        </div>
      </div>
      <div className="mt-[313px] ">
        <Footer />
      </div>
    </div>
  );
}

export default BookService;
