import React, { useEffect } from 'react';
import { Shield, Users, Phone, AlertTriangle, Map, Bell, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // We'll create this new CSS file

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Animate elements when they come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
     
      {/* Hero Section */}
      <div 
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "100vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="text-white">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Your Safety is Our Priority
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                  ResQNow provides real-time disaster management and emergency response solutions. 
                  Stay prepared, stay safe with our comprehensive disaster management platform.
                </p>
                <button 
                  onClick={() => navigate('/login')}
                  className="mt-8 bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Our Features
          </h2>
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center animate-on-scroll">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 py-8 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-600">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h6 className="text-xl font-semibold mb-3">24/7 Monitoring</h6>
                  <p className="mt-2 mb-4 text-gray-600 leading-relaxed">
                    Real-time monitoring and early warning systems to keep you informed about potential disasters.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center animate-on-scroll">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 py-8 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-600">
                    <Users className="w-8 h-8" />
                  </div>
                  <h6 className="text-xl font-semibold mb-3">Community Network</h6>
                  <p className="mt-2 mb-4 text-gray-600 leading-relaxed">
                    Connect with local communities and emergency responders for better coordination.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center animate-on-scroll">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-6 py-8 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-600">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h6 className="text-xl font-semibold mb-3">Emergency Response</h6>
                  <p className="mt-2 mb-4 text-gray-600 leading-relaxed">
                    Quick access to emergency services and resources when you need them most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;