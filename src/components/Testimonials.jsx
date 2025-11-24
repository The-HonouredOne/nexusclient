import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Influencer",
      content: "Nexus Influence transformed my career. The brand partnerships are amazing!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Tech Reviewer",
      content: "Best platform for connecting with relevant brands. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Lifestyle Blogger",
      content: "The analytics and payment system are top-notch. Love working here!",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">What Our Influencers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials