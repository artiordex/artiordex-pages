
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface QuickAction {
  id: string;
  icon: string;
  label: string;
  action: () => void;
  color: string;
}

const QuickBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handlePhoneCall = () => {
    window.open('tel:+82-2-1234-5678', '_self');
    setIsOpen(false);
  };

  const handleEmail = () => {
    window.open('mailto:contact@artiordex.com?subject=Inquiry from Website', '_self');
    setIsOpen(false);
  };

  const downloadProposal = () => {
    // Simulate proposal download
    const link = document.createElement('a');
    link.href = '/documents/artiordex-proposal.pdf';
    link.download = 'Artiordex-Business-Proposal.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const allActions: QuickAction[] = [
    {
      id: 'location',
      icon: 'ri-map-pin-2-line',
      label: 'Directions',
      action: () => {
        window.open('https://maps.google.com/?q=Gwangmyeong,Korea', '_blank');
        setIsOpen(false);
      },
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      id: 'business',
      icon: 'ri-briefcase-line',
      label: 'Download Proposal',
      action: downloadProposal,
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 'phone',
      icon: 'ri-phone-line',
      label: 'Call Us',
      action: handlePhoneCall,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'team',
      icon: 'ri-team-line',
      label: 'Our Team',
      action: () => {
        window.location.href = '/about';
        setIsOpen(false);
      },
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      id: 'devices',
      icon: 'ri-computer-line',
      label: 'Equipment',
      action: () => {
        window.location.href = '/services';
        setIsOpen(false);
      },
      color: 'bg-cyan-500 hover:bg-cyan-600'
    },
    {
      id: 'email',
      icon: 'ri-mail-line',
      label: 'Email Us',
      action: handleEmail,
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      id: 'scroll',
      icon: 'ri-arrow-up-line',
      label: 'Scroll to Top',
      action: scrollToTop,
      color: 'bg-gray-500 hover:bg-gray-600'
    }
  ];

  // Show only 4 items on mobile
  const actions = isMobile ? allActions.slice(0, 4) : allActions;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Sub-menu Items */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 space-y-3">
          {actions.map((action, index) => (
            <div
              key={action.id}
              className="relative group"
              style={{
                transform: `translateY(${isOpen ? 0 : (index + 1) * 20}px)`,
                opacity: isOpen ? 1 : 0,
                transition: `all 0.3s ease ${index * 0.1}s`
              }}
            >
              {/* Tooltip */}
              <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {action.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black/80"></div>
              </div>
              
              {/* Action Button */}
              <button
                onClick={action.action}
                className={`w-12 h-12 ${action.color} text-white rounded-full shadow-lg border-2 border-blue-600 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-xl transform hover:-translate-y-1`}
              >
                <i className={`${action.icon} text-lg`}></i>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-2xl border-2 border-blue-600 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 group"
      >
        <i 
          className={`ri-${isOpen ? 'close' : 'add'}-line text-2xl transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          } group-hover:scale-110`}
        ></i>
      </button>

      {/* Backdrop for mobile */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default QuickBar;
