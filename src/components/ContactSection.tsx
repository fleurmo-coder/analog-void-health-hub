import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({});
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - emails automatically sent to info@noanalog.com
    setTimeout(() => {
      toast.success("Your message has been sent successfully!", {
        description: "We'll be in touch with you shortly.",
      });
      setFormData({});
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
            <h3 className="text-2xl font-bold mb-6">
              <a href="mailto:info@noanalog.com" className="hover:text-[#ADD8E6] transition-colors">
                Send us a Message
              </a>
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@noanalog.com"
                className="w-full bg-[#ADD8E6] hover:bg-[#9FCCE6] text-black font-medium py-3 rounded-md transition-colors flex items-center justify-center"
              >
                Send us a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
