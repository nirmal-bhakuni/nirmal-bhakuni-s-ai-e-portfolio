
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { sendMessageToAI } from '../services/geminiService';
import { ChatIcon, CloseIcon, SendIcon } from './icons/UiIcons';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'model', text: "Hello! I'm NirmalAI, your guide to this portfolio. Ask me anything about Nirmal's projects or learnings." }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (userInput.trim() === '' || isLoading) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToAI(userInput);
      setMessages([...newMessages, { sender: 'model', text: responseText }]);
    } catch (error) {
      setMessages([...newMessages, { sender: 'model', text: 'An error occurred. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <div className={`fixed bottom-0 right-0 m-6 sm:m-8 transition-transform duration-300 ease-in-out ${isOpen ? 'transform scale-0' : 'transform scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 text-white rounded-full p-4 shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
          aria-label="Open chat"
        >
          <ChatIcon className="w-8 h-8" />
        </button>
      </div>

      <div className={`fixed bottom-0 right-0 sm:m-8 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl w-full sm:w-96 h-full sm:h-[600px] flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <header className="flex items-center justify-between p-4 border-b border-slate-700">
          <h3 className="text-lg font-bold text-white">NirmalAI Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white" aria-label="Close chat">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-xl ${msg.sender === 'user' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-200'}`}>
                  <p className="text-sm break-words">{msg.text}</p>
                </div>
              </div>
            ))}
             {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-slate-700 text-slate-200 px-4 py-2 rounded-xl flex items-center space-x-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <footer className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
              className="flex-1 w-full bg-slate-900 border border-slate-600 rounded-full py-2 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || userInput.trim() === ''}
              className="bg-cyan-500 text-white rounded-full p-2 disabled:bg-slate-600 disabled:cursor-not-allowed hover:bg-cyan-600 transition-colors"
              aria-label="Send message"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Chatbot;
