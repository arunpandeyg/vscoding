import Footer from "./Footer";
import Header from "./Header";

function Contact() {
  return (
    <div className="bg-orange-200 text-orange-700">
      <div>
        <Header />
      </div>
      <div className="text-center">
       
        <p className="text-2xl text-orange-700 mt-10 t">
          We are here to help you with any questions or concerns. Please feel
          free to reach out.
        </p>
        <div className="mt-10 text-center justify-center text-thin text-[18px]">
          <h1 className="mb-10">Contact Us</h1>
          <h3 className="mb-10 text-orange-700 text-2xl">Arun Pandey</h3>
          <p>Email: arunpandeyom@gmail.com</p>
          <p>Phone: +91 9810013821</p>
          <a href="phone:+919810013821" className="text-orange-600">
            Call Us
          </a>
          <p>Address: 123 Main St, New Delhi, </p>
          <p>New Delhi 110018</p>
          <a href="mailto:arunpandeyom@gmail.com" className="text-orange-600">
            Email Us
          </a>
        </div>
      </div>
      <div className="mt-[90px] ">
        <Footer  cla/>
      </div>
    </div>
  );
}

export default Contact;
