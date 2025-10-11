import { Target, Users, Award, TrendingUp } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We empower businesses and individuals with cutting-edge digital marketing strategies and tools.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We build long-term partnerships based on trust and results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we create and deliver.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of trends to provide you with the most effective solutions.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gold">EchoBroad</span> Agency
          </h1>
          <p className="text-xl text-gray-300">
            We're a digital marketing and creative media company dedicated to amplifying your brand's voice
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              EchoBroad Agency was founded with a simple yet powerful vision: to make professional digital marketing accessible to businesses of all sizes. We recognized that many talented entrepreneurs and marketers lacked access to the tools, templates, and training they needed to compete in the digital landscape.
            </p>
            <p>
              Today, we serve thousands of clients worldwide, providing premium digital products and comprehensive training courses that deliver real results. Our team of experienced marketers, designers, and educators work tirelessly to create resources that are both practical and effective.
            </p>
            <p>
              Whether you're a solo entrepreneur just starting out or an established agency looking to scale, EchoBroad provides the resources and knowledge you need to succeed in digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">5000+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">50+</div>
              <div className="text-gray-300">Digital Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">20+</div>
              <div className="text-gray-300">Expert Courses</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CEO - David Uwak */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/DavidUwak.FounderCEO.jpg" 
                  alt="David Uwak - CEO" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-navy mb-1">David Uwak</h3>
                <p className="text-gold font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">Media Buyer & Digital Marketing Expert</p>
              </div>
            </div>

            {/* CMO - UB Uwak */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/UBUwak.ChiefMarketingOfficer.jpg" 
                  alt="UB Uwak - CMO" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-navy mb-1">UB Uwak</h3>
                <p className="text-gold font-medium mb-2">Chief Marketing Officer</p>
                <p className="text-gray-600 text-sm">Strategic Marketing Leader</p>
              </div>
            </div>

            {/* Creative Director */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/Creativedirector.jpg" 
                  alt="Creative Director" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-navy mb-1">Creative Director</h3>
                <p className="text-gold font-medium mb-2">Creative Director</p>
                <p className="text-gray-600 text-sm">Visual Storytelling Expert</p>
              </div>
            </div>

            {/* Website Designer - Osagie Bernard E. */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/OsagieBernardE.WebsiteDesigner.JPG" 
                  alt="Osagie Bernard E. - Website Designer" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-navy mb-1">Osagie Bernard E.</h3>
                <p className="text-gold font-medium mb-2">Website Designer</p>
                <p className="text-gray-600 text-sm">Web Development Specialist</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team consists of seasoned digital marketing professionals, certified ad specialists, award-winning designers, and experienced educators. Each member brings unique expertise and a shared commitment to helping you succeed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With combined decades of experience managing millions in ad spend, creating thousands of campaigns, and training tens of thousands of students, we know what works in digital marketing—and we're here to share that knowledge with you.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

