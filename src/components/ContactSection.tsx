
import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    partnerType: 'Hospital Group'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!", {
        description: "We'll be in touch with you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
        partnerType: 'Hospital Group'
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-noanalog-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#ADD8E6]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#ADD8E6]/5 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading">
            Get in <span className="text-[#ADD8E6]">Touch</span>
          </h2>
          <p className="subheading">
            Interested or have a question? Reach out today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-[#ADD8E6] font-medium mb-2">Email</h4>
                <a href="mailto:info@noanalog.com" className="text-gray-400 hover:text-[#ADD8E6] transition-colors">
                  info@noanalog.com
                </a>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <p className="text-gray-400 mb-4">
                We're committed to revolutionizing healthcare through digital innovation. Our team brings
                together expertise in healthcare, technology, and business to create solutions that make a real difference.
              </p>
              <p className="text-gray-400">
                Whether you're a healthcare provider looking to enhance patient care, a developer with innovative ideas,
                or an industry partner seeking to expand your digital capabilities, we'd love to hear from you.
              </p>
            </div>
          </div>
          
          <div className="bg-noanalog-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-noanalog-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#ADD8E6] focus:outline-none focus:ring-1 focus:ring-[#ADD8E6]"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-noanalog-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#ADD8E6] focus:outline-none focus:ring-1 focus:ring-[#ADD8E6]"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full bg-noanalog-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#ADD8E6] focus:outline-none focus:ring-1 focus:ring-[#ADD8E6]"
                  />
                </div>
                
                <div>
                  <label htmlFor="partnerType" className="block text-sm font-medium text-gray-300 mb-1">
                    Partnership Interest
                  </label>
                  <select
                    id="partnerType"
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleChange}
                    className="w-full bg-noanalog-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#ADD8E6] focus:outline-none focus:ring-1 focus:ring-[#ADD8E6]"
                  >
                    <option>Hospital Group</option>
                    <option>Development Partner</option>
                    <option>Industry Partner</option>
                    <option>Investor</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-noanalog-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:border-[#ADD8E6] focus:outline-none focus:ring-1 focus:ring-[#ADD8E6]"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ADD8E6] hover:bg-[#9FCCE6] text-black font-medium py-2 rounded-md transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
