import React from 'react'

const Stats = () => {
  const stats = [
    { number: "10K+", label: "Active Influencers" },
    { number: "500+", label: "Brand Partners" },
    { number: "1M+", label: "Campaigns Launched" },
    { number: "98%", label: "Success Rate" }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
              <p className="text-xl opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats