import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          <p className="text-gray-300 mb-8 text-center">No Analog Ventures (NAV)</p>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Cookies</h2>
              
              <p>
                NAV uses only technical and functional cookies. And analytical cookies that do not infringe on your privacy. The cookies we use are necessary for the technical operation of the website and your ease of use. They ensure that the website works properly. You can opt out of cookies by setting your Internet browser to stop storing cookies. In addition, you can also delete any information previously stored via your browser settings.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
              
              <p>
                You have the right to view, correct or delete your personal data. In addition, you have the right to withdraw your possible consent to data processing or object to the processing of your personal data by NAV and you have the right to data portability. This means that you can submit a request to us to send the personal data that we hold about you in a computer file to you or another organization named by you.
              </p>
              
              <p>
                You may send a request to inspect, correct, delete, transfer your personal data or request the revocation of your consent or objection to the processing of your personal data to <a href="mailto:info@noanalog.com" className="text-blue-300 hover:text-blue-200 transition-colors">info@noanalog.com</a>.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Identity Verification</h2>
              
              <p>
                To make sure that the request for inspection is made by you, we ask you to send a copy of your ID with the request. In this copy, black out your passport photo, MRZ (machine readable zone, the strip of numbers at the bottom of the passport), passport number and Citizen Service Number (BSN). This is to protect your privacy. We will respond to your request as soon as possible.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Complaints</h2>
              
              <p>
                NAV would also like to point out that you have the possibility to file a complaint with the national regulator, the Authority for Personal Data. You can do so through the following link: <a href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons</a>
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Security</h2>
              
              <p>
                NAV takes the protection of your data seriously and takes appropriate measures to prevent abuse, loss, unauthorized access, unwanted disclosure and unauthorized modification. If you have the impression that your data is not properly secured or there are indications of abuse, please contact us at <a href="mailto:info@noanalog.com" className="text-blue-300 hover:text-blue-200 transition-colors">info@noanalog.com</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;