"use client";
import FadeIn from "../utilities/FadeIn";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Contact({ setContactInView }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    setContactInView(inView);
  }, [inView, setContactInView]);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
  
      if (response.ok) {
        setSubmissionStatus('Email sent successfully!');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        setSubmissionStatus(`Error submitting form: ${errorData.message}. Please try again.`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('Error submitting form. Please try again.');
    }
  };  

  return (
    <div className="relative flex items-center justify-center text-white py-12 px-8 bg-cover bg-center" style={{ backgroundImage: 'url("/images/footer pic.jpg")' }} ref={ref} id="contact">
      <FadeIn className="w-full max-w-4xl p-8 bg-black bg-opacity-50 rounded-lg">
        <div className="flex flex-col items-center">
          <p className="text-lg text-red">Got other questions?</p>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
            <input 
              type="text" 
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Full Name" 
              className="w-full p-3 bg-transparent border-b-2 border-white outline-none text-white placeholder-white" 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email" 
              className="w-full p-3 bg-transparent border-b-2 border-white outline-none text-white placeholder-white" 
              required 
            />
            <input 
              type="text" 
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="Subject" 
              className="w-full p-3 bg-transparent border-b-2 border-white outline-none text-white placeholder-white" 
            />
            <textarea 
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your Message" 
              className="w-full p-3 bg-transparent border-b-2 border-white outline-none text-white placeholder-white" 
              rows="4"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full border-2 border-white bg-red-500 hover:bg-red hover:border-red text-white font-bold py-3 px-4 transition-colors duration-200">
              SUBMIT
            </button>
          </form>
          {submissionStatus && (
            <p className="mt-4 text-center">{submissionStatus}</p>
          )}
        </div>
        <p className="mt-8 text-center">Creator? Influencer? Entrepreneur?<br />We welcome enquiries from passionate professionals looking to collaborate.</p>
      </FadeIn>
    </div>
  );
}
