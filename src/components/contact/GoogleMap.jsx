const GoogleMap = () => {
return ( <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-100">
<iframe
title="Aavya Enterprises Office Location"
src="https://www.google.com/maps?q=Aarohi+Heights,+Ghat+Road,+Lower+Chutia,+Ranchi,+Jharkhand+834010&output=embed"
width="100%"
height="400"
style={{ border: 0 }}
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
className="w-full h-[400px]"
/> </div>
);
};

export default GoogleMap;
