import React from 'react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all">
        WhatsApp
      </a>
    </div>
  );
}
