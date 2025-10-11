import { Target, TrendingUp, Megaphone, PenTool, Video, BarChart3, Globe, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all major social platforms with engaging content and strategic campaigns that drive real engagement and conversions.'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Maximize your ROI with expertly managed Facebook, Instagram, Google, and YouTube ad campaigns designed to reach your ideal customers.'
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Captivate your audience with high-quality graphics, videos, and copy that tell your brand story and drive action.'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Growth Strategy',
      description: 'Improve your online visibility and organic reach with proven SEO techniques and comprehensive growth strategies.'
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video content that engages, educates, and converts. From concept to final edit, we bring your vision to life.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and comprehensive reporting to track performance, measure success, and optimize your marketing efforts.'
    },
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Beautiful, responsive, and user-friendly websites that convert visitors into customers. From landing pages to full e-commerce solutions.'
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Create a memorable brand identity that resonates with your audience. From logo design to complete brand guidelines and visual identity systems.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive digital marketing solutions tailored to grow your business and amplify your brand's voice
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-gold"
              >
                <div className="bg-navy/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-red" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy mb-12">
            Why Choose <span className="text-red">EchoBroad</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-4">10+</div>
              <h3 className="text-xl font-semibold text-navy mb-2">Years Experience</h3>
              <p className="text-gray-600">Proven track record in digital marketing</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-4">500+</div>
              <h3 className="text-xl font-semibold text-navy mb-2">Happy Clients</h3>
              <p className="text-gray-600">Businesses we've helped grow</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-4">98%</div>
              <h3 className="text-xl font-semibold text-navy mb-2">Success Rate</h3>
              <p className="text-gray-600">Client satisfaction and retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8">
            Let's discuss how our services can help you achieve your marketing goals
          </p>
          <Link to="/contact">
            <Button className="bg-white text-red hover:bg-gray-100 px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

