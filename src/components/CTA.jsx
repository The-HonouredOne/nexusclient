import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of influencers who are already earning with top brands
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Join as Influencer
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-colors">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA