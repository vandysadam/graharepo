
export default function Menu4Section() {
    return (
        <section className="relative w-full py-16 ">
           <div className="max-w-6xl mx-auto text-center px-6">
                <h2 className="text-4xl font-extrabold text-indigo-900 mb-6">Kantor Kami</h2>
                <h3 className="text-lg text-gray-700 max-w-2xl mx-auto">
                    PT. GRAHA ESTIMATIKA PRADANA
                </h3>
            </div>
            {/* Grid Project Cards */}
            <div className="flex justify-center mt-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1591946611748!2d106.68821767442577!3d-6.242740161127689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa479cc57d03%3A0x6a4f7c11ac23337!2sPT.%20Graha%20Estimatika%20Pradana!5e0!3m2!1sen!2sid!4v1739422754599!5m2!1sen!2sid" 
                height="600" 
                width="100%"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    );
}
