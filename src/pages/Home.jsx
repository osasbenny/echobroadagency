import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingBag, BookOpen, TrendingUp, Target, Zap, Users } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Marketing',
      description: 'Data-driven strategies that deliver measurable results for your brand.'
    },
    {
      icon: Zap,
      title: 'Creative Excellence',
      description: 'Stunning visuals and compelling content that captivate your audience.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Proven methods to scale your business and maximize ROI.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Amplify Your Brand's <span className="text-gold">Voice</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Digital marketing and creative media solutions that drive real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/store">
              <Button className="bg-red hover:bg-red/90 text-white px-8 py-6 text-lg">
                <ShoppingBag className="mr-2" />
                Browse Store
              </Button>
            </Link>
            <Link to="/courses">
              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-6 text-lg">
                <BookOpen className="mr-2" />
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy mb-12">
            Why Choose <span className="text-red">EchoBroad</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border-2 border-gray hover:border-gold transition-all duration-300 hover:shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-red mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Digital Products <span className="text-red">&</span> Resources
            </h2>
            <p className="text-xl text-gray-600">
              Premium templates, guides, and toolkits to accelerate your marketing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-navy text-white text-center py-8 rounded-lg mb-4">
                <ShoppingBag className="w-16 h-16 mx-auto mb-2 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Ad Templates</h3>
              <p className="text-gray-600 mb-4">
                Ready-to-use templates for high-converting ads
              </p>
              <p className="text-2xl font-bold text-red">From ₦7,500</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-navy text-white text-center py-8 rounded-lg mb-4">
                <Target className="w-16 h-16 mx-auto mb-2 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Strategy Toolkits</h3>
              <p className="text-gray-600 mb-4">
                Complete marketing strategy frameworks
              </p>
              <p className="text-2xl font-bold text-red">From ₦10,000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-navy text-white text-center py-8 rounded-lg mb-4">
                <Zap className="w-16 h-16 mx-auto mb-2 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Design Packs</h3>
              <p className="text-gray-600 mb-4">
                Professional design templates for your brand
              </p>
              <p className="text-2xl font-bold text-red">From ₦9,000</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/store">
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Master Digital <span className="text-red">Marketing</span>
            </h2>
            <p className="text-xl text-gray-600">
              Learn from industry experts and transform your career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray hover:border-gold transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red text-white p-3 rounded-lg">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy">Facebook Ads Mastery</h3>
                  <p className="text-gray-600">Beginner to Advanced</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Learn how to create, manage, and scale Facebook ads effectively with proven strategies.
              </p>
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold text-red">₦35,000</p>
                <Link to="/courses">
                  <Button className="bg-navy hover:bg-navy/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray hover:border-gold transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red text-white p-3 rounded-lg">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy">Agency Starter Course</h3>
                  <p className="text-gray-600">Build Your Business</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Start and scale your own digital agency using ads and automation strategies.
              </p>
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold text-red">₦50,000</p>
                <Link to="/courses">
                  <Button className="bg-navy hover:bg-navy/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/courses">
              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-4">
                Browse All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">
            Join thousands of marketers and entrepreneurs who trust EchoBroad
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

