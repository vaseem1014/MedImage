import React, { useState, useEffect } from 'react';

const ChatFab = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Inject keyframes for pulse animation
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(0,123,255, 0.7); }
        70% { box-shadow: 0 0 0 16px rgba(0,123,255, 0); }
        100% { box-shadow: 0 0 0 0 rgba(0,123,255, 0); }
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  // Inline styles
  const fabStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 1000,
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#21b6ae',
    color: '#fff',
    border: 'none',
    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
    fontSize: '32px',
    cursor: 'pointer',
    display: isChatOpen ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'pulse 2s infinite',
    transition: 'background 0.2s',
  };

  const chatContainerStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 1001,
    width: '420px',
    height: '620px',
    boxShadow: '0 4px 32px rgba(0,0,0,0.28)',
    borderRadius: '18px',
    overflow: 'hidden',
    background: '#fff',
    display: isChatOpen ? 'block' : 'none',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '14px',
    zIndex: 1002,
    background: 'rgba(0,0,0,0.08)',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    fontSize: '32px',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '18px',
  };

  const tooltipStyle = {
    position: 'absolute',
    right: '80px',
    bottom: '0',
    background: 'rgba(33,182,174,0.95)',
    color: '#fff',
    padding: '14px 18px',
    borderRadius: '10px',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(0,0,0,0.14)',
    opacity: showTooltip ? 1 : 0,
    pointerEvents: showTooltip ? 'auto' : 'none',
    transform: showTooltip ? 'translateY(0)' : 'translateY(10px)',
    transition: 'opacity 0.3s, transform 0.3s',
    zIndex: 1100,
    fontWeight: 500,
    letterSpacing: 0.5,
  };

  return (
    <>
      {/* Tooltip */}
      <div style={tooltipStyle}>
        <span role="img" aria-label="doctor">🩺</span> Meet <b>Dr. MedBot</b> – Your Virtual Health Assistant!
      </div>

      {/* Floating Action Button */}
      <button
        style={fabStyle}
        onClick={() => setIsChatOpen(true)}
        aria-label="Open virtual assistant"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Medical stethoscope SVG */}
        
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path d="M6 3v6a6 6 0 1 0 12 0V3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="18" r="3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Chat Interface */}
      <div style={chatContainerStyle}>
        {/* Close Button */}
        <button
          style={closeButtonStyle}
          onClick={() => setIsChatOpen(false)}
          aria-label="Close chat"
          title="Close"
        >
          ×
        </button>
        <iframe
          title="Virtual Assistant"
          src="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/19/13/20250319131428-D946MXC4.json"
          style={iframeStyle}
          allow="microphone"
        />
      </div>
    </>
  );
};

export default ChatFab;
