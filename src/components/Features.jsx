import React from 'react'
import { FaChartLine, FaUsers, FaShieldAlt, FaMobile } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: <FaChartLine className="text-3xl text-yellow-500" />,
      title: "Advanced Analytics",
      description: "Track performance with detailed insights and metrics"
    },
    {
      icon: <FaUsers className="text-3xl text-yellow-500" />,
      title: "Audience Matching",
      description: "Connect with the right brands for your audience"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-yellow-500" />,
      title: "Secure Payments",
      description: "Safe and timely payment processing guaranteed"
    },
    {
      icon: <FaMobile className="text-3xl text-yellow-500" />,
      title: "Mobile First",
      description: "Manage campaigns on-the-go with our mobile app"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features