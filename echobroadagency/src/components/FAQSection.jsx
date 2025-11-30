import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'What exactly does Echobroad Agency do?',
    answer: 'Echobroad is a full-service online advertising agency. We help businesses grow through paid ads (Facebook, Instagram, YouTube, Google, Tiktok) and create all the ad assets needed to make those campaigns succeed — from videos and graphics to websites and copywriting.'
  },
  {
    question: 'I’m new to online advertising. Can you guide me?',
    answer: 'Absolutely. We offer one-on-one training sessions and done-for-you ad services. Whether you want to learn ads yourself or let us handle everything, we’ll guide you step-by-step to real results.'
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing depends on what you need — training, ad management, web design, or full creative support. You can check our pricing page or click “Get a Quote” for a quick recommendation based on your goals and budget.'
  },
  {
    question: 'How long before I start seeing results from ads?',
    answer: 'Results vary depending on your product, audience, and offer. Typically, clients start seeing traction within 2–4 weeks of launching their campaigns — as we test, optimize, and scale the ads for maximum ROI.'
  },
  {
    question: 'Do you work with businesses outside Nigeria?',
    answer: 'Yes, we do! Echobroad works with clients across Africa, the U.S., U.K., and beyond. We understand global ad platforms and tailor strategies to your target market, no matter where you are.'
  },
  {
    question: 'What’s the difference between your training and done-for-you service?',
    answer: 'Our training teaches you how to run ads confidently by yourself — perfect for entrepreneurs and marketers. Our done-for-you service means we handle everything — strategy, creatives, setup, and management — while you focus on running your business.'
  },
  {
    question: 'What platforms do you run ads on?',
    answer: 'We currently run ads on Facebook, Instagram, YouTube, and Google Tiktok. We also create content optimized for TikTok and LinkedIn depending on your audience and campaign goals.'
  },
  {
    question: 'Can you design my website or sales funnel?',
    answer: 'Yes. Our in-house team designs conversion-focused, SEO/Mobile friendly websites and landing pages that complement your ad strategy, ensuring clicks turn into paying customers.'
  },
  {
    question: 'I already have ads running but they’re not performing. Can you fix them?',
    answer: 'That’s one of our specialties. We’ll audit your campaigns, identify what’s wrong (targeting, creatives, copy, or tracking), and restructure them for better performance.'
  },
  {
    question: 'How do I get started with Echobroad?',
    answer: 'It’s simple: 1. Click the “Book a Free Ad Audit” or “Get Started” button. 2. Fill out the quick form. 3. We’ll review your business and recommend the best plan either training or done-for-you.'
  },
  {
    question: 'Do you guarantee results?',
    answer: 'We guarantee strategy and execution excellence, not magic. Our process is data-driven and transparent — we focus on measurable actions that increase your chances of success, not empty promises.'
  },
  {
    question: 'How can I contact Echobroad directly?',
    answer: 'You can: Call or WhatsApp us at +234 9071447959 Email info@echobroad.com Or fill out the contact form on our website. We typically respond within 24 hours, faster during business hours.'
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Frequently Asked <span className="text-red">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Check out our FAQ section. We might have answered your question already.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg text-navy hover:text-red focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

