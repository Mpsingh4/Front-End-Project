import React from 'react';
import Features from '../../containers/features/features';
import './feature.css';

const featuresData = [
  {
    title: 'Improvement',
    text: "GPT is constantly improving through ongoing training with new data and fine-tuning methods. These updates help the model better understand language nuances and provide more accurate responses. As technology progresses, further advancements will enhance its ability to handle more complex tasks and understand deeper context."
  },
  {
    title: 'Active',
    text: "Designed to be an active participant in conversations, responding quickly and engaging with users in real-time. It can maintain context over multiple exchanges, making interactions feel more natural and fluid. The model adapts its responses based on user input, providing an interactive and dynamic experience."
  },
  {
    title: 'Messages',
    text: "GPT generates messages that are contextually relevant and designed to meet the user's needs, whether it’s answering questions, offering suggestions, or engaging in casual conversation. It processes input efficiently to provide coherent and meaningful outputs. The clarity and tone of its messages can vary depending on the context and the user’s preferences."
  },
  {
    title: 'Future',
    text: "GPT-3 is expected to become more advanced with improved conversational abilities and an even deeper understanding of human language. Newer versions may offer increased personalization, enabling more tailored interactions based on user preferences. As AI research continues, GPT-3's capabilities could expand to support more diverse industries and tasks, revolutionizing how we interact with machines."
  }

]

const Feature = () => {
  return (
    <div className='whatWS__features section__padding' id="features">
      <div className='whatWS__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into the Future Today & Make it Happen.</h1>
        <p>Request Early Access</p>
      </div>
      <div className='whatWS__features-container'>
        {featuresData.map((item, index) => (
          <Features title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Feature
