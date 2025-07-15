import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Cookies Policy for No Analog Ventures (NAV)</h1>
          <p className="text-gray-300 mb-8 text-center">Last updated: July 11, 2025</p>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                This Cookies Policy explains what Cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using Cookies and how that information is used.
              </p>
              
              <p>
                Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from Cookies. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.
              </p>
              
              <p>
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies we use.
              </p>
              
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Definitions</h2>
              
              <p>For the purposes of this Cookies Policy:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to No Analog Ventures, Frankrijkstraat 114, 5622 AH Eindhoven, Nederland.
                </li>
                <li>
                  <strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
                </li>
                <li>
                  <strong>Website</strong> refers to the No Analog Ventures website, accessible from http://www.noanalog.com
                </li>
                <li>
                  <strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
                </li>
              </ul>
              
              <p>
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
              </p>
              
              <p>We use both session and persistent Cookies for the purposes set out below:</p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Necessary / Essential Cookies</h3>
                  <p><strong>Type:</strong> Session Cookies</p>
                  <p><strong>Administered by:</strong> Us</p>
                  <p><strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Functionality Cookies</h3>
                  <p><strong>Type:</strong> Persistent Cookies</p>
                  <p><strong>Administered by:</strong> Us</p>
                  <p><strong>Purpose:</strong> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                </div>
              </div>
              
              <p>
                If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
              </p>
              
              <p>
                If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
              </p>
              
              <p>
                If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.
              </p>
              
              <p>
                If you have any questions about this Cookies Policy, You can contact us by email: <a href="mailto:info@noanalog.com" className="text-blue-300 hover:text-blue-200 transition-colors">info@noanalog.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;