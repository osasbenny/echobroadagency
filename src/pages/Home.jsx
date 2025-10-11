import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingBag, BookOpen, TrendingUp, Target, Zap, Users, Megaphone, PenTool, BarChart3, ArrowRight, Star, Quote } from 'lucide-react'
import { blogPosts } from '../data/blog'
import client2 from '../assets/client2.jpg'
import client4 from '../assets/client4.jpg'
import client6 from '../assets/client6.jpg'
import client8 from '../assets/client8.jpg'
import client10 from '../assets/client10.jpeg'
import client12 from '../assets/client12.jpeg'

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

  const services = [
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all major platforms'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Maximize ROI with expertly managed ad campaigns'
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Captivate your audience with high-quality content'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing'
    }
  ]

  const clients = [
    { name: 'Vinelo', logo: client2 },
    { name: 'Client 4', logo: client4 },
    { name: 'Chicken Republic', logo: client6 },
    { name: 'Great Ville Hotels', logo: client8 },
    { name: 'Acactus Digital Media', logo: client10 },
    { name: 'Blue Creators', logo: client12 }
  ]

  const testimonials = [
    {
      name: 'John Adeyemi',
      company: 'Tech Startup CEO',
      text: 'EchoBroad Agency transformed our digital presence. Their strategic approach to social media marketing increased our engagement by 300% in just 3 months.',
      rating: 5
    },
    {
      name: 'Sarah Okonkwo',
      company: 'E-commerce Brand Owner',
      text: 'The ROI we\'ve seen from their Facebook ad campaigns is incredible. They truly understand how to reach and convert our target audience.',
      rating: 5
    },
    {
      name: 'Michael Bello',
      company: 'Restaurant Chain Manager',
      text: 'Professional, creative, and results-driven. EchoBroad helped us scale our business through effective digital marketing strategies.',
      rating: 5
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
            From Strategy To Visuals, We Help Businesses Turn Views To Clients!
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

      {/* Our Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Our <span className="text-red">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital marketing solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-navy/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-red" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy mb-12">
            Trusted by <span className="text-red">Leading Brands</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all"
              >
                <Quote className="w-10 h-10 text-gold mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Latest from Our <span className="text-red">Blog</span>
            </h2>
            <p className="text-xl text-gray-600">
              Insights and strategies to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs font-semibold text-gold mb-2 uppercase">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="text-red hover:text-red/80 p-0">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link to="/blog">
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4">
                View All Posts
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

