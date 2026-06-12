const GoogleMap = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-100">
      <iframe
        title="Aavya Enterprises Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.685!2d85.333!3d23.370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGhat+Road+Lower+Chutia+Ranchi+834010!5e0!3m2!1sen!2sin!4v1700000000000"
        width="100%"
        height="400"
        style={{ border: 0, height: '400px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[400px]"
      />
    </div>
  );
};

export default GoogleMap;
