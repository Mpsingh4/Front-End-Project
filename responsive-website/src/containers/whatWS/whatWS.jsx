import React from 'react'
import './whatWS.css';
import Features from '../features/features';

const WhatWS = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatWS">
    <div className="gpt3__whatgpt3-feature">
      <Features title="What is GPT-3" text="GPT-3 (Generative Pretrained Transformer 3) is a language model developed by OpenAI. It's an advanced AI model designed to generate human-like text based on the input it receives. GPT-3 uses deep learning and a transformer architecture to understand and generate text, making it capable of performing a wide range of language tasks like writing, summarizing, translating, and even answering questions with context." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Features title="Chatbots" text="The GPT-3 chatbot is an AI-based conversational system powered by OpenAI's GPT-3 language model. It is designed to understand and generate human-like text responses based on the user's input." />
      <Features title="Knowledgebase" text="The knowledge base of GPT-3 is a vast collection of text data that the model was trained on. This data includes books, articles, websites, and other publicly available written content. The knowledge base allows GPT-3 to understand a wide range of topics, including science, history, technology, culture, and more. However, it's important to note that the model doesn't 'know' things in the way humans do—rather, it has learned patterns and associations from the data it was trained on." />
      <Features title="Education" text="GPT-3 can be used in education for personalized tutoring, writing assistance, and language learning, offering explanations and practice across various subjects. It helps with research, problem-solving, and providing interactive lessons for students, making learning more engaging." />
    </div>
  </div>
);
}

export default WhatWS;
