import React from 'react'
import { FaUserPlus, FaHandshake, FaRocket } from 'react-icons/fa'

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-yellow-500" />,
      title: "Sign Up",
      description: "Create your profile and showcase your influence"
    },
    {
      icon: <FaHandshake className="text-4xl text-yellow-500" />,
      title: "Connect",
      description: "Match with brands that align with your audience"
    },
    {
      icon: <FaRocket className="text-4xl text-yellow-500" />,
      title: "Launch",
      description: "Execute campaigns and track your success"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks