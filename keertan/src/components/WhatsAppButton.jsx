const WhatsAppButton = () => {
    const phoneNumber = '9810013821';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    const openWhatsApp = () => {
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className="text-center text-2xl text-orange-700 my-5">
        <button onClick={openWhatsApp}>
            Chat on WhatsApp
        </button>
        </div>
    );
};

export default WhatsAppButton;