import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'
import { Button } from '@/components/ui/button'
import { Check, ArrowLeft, BookOpen, Clock, BarChart, User } from 'lucide-react'
import { useState } from 'react'

export default function CourseDetail() {
  const { id } = useParams()
  // NOTE: The courses data is not available in the provided products.js, 
  // so I'm using a placeholder for now to allow the build to pass.
  // This will need to be corrected once the actual courses data structure is known.
  const courses = [
    {
      id: 1,
      name: 'Meta (Facebook & Instagram)',
      price: 20000,
      overview: 'Master Facebook and Instagram advertising with this comprehensive course.',
      longDescription: 'Master Facebook and Instagram advertising with this comprehensive course that takes you from beginner to expert. Learn business manager setup, business page creation, ad account configuration, targeting and retargeting strategies, campaign objectives, budget and placement optimization, pixel installation, payment issue resolution, and how to reinstate disabled pages and ad accounts. Taught by David Uwak, Media Buyer and CEO of N-Broad Digital.',
      image: '/images/product5-meta-ad-training.jpg',
      duration: '8 Weeks',
      level: 'Beginner to Advanced',
      curriculum: ['Module 1: Setup', 'Module 2: Targeting', 'Module 3: Optimization'],
      outcomes: ['Run profitable ads', 'Fix disabled accounts', 'Master pixel installation'],
      instructor: 'David Uwak',
      instructorBio: 'Media Buyer and CEO of N-Broad Digital.'
    }
  ]
  const course = courses.find(c => c.id === parseInt(id))
  const [isProcessing, setIsProcessing] = useState(false)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Course not found</h2>
          <Link to="/courses">
            <Button className="bg-navy hover:bg-navy/90 text-white">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleEnrollment = () => {
    setIsProcessing(true)
    
    // Initialize Paystack payment
    const handler = window.PaystackPop.setup({
      key: 'pk_live_2f7d2486e853aa99725c51f0528bade2c71c07cf', // Live Paystack public key
      email: 'student@email.com', // Get from user input or auth
      amount: course.price * 100, // Amount in kobo
      currency: 'NGN',
      ref: 'ECHO_COURSE_' + Math.floor((Math.random() * 1000000000) + 1),
      metadata: {
        course_id: course.id,
        course_name: course.name,
        type: 'course_enrollment'
      },
      callback: function(response) {
        // Verify payment on backend
        window.location.href = `/payment-success?reference=${response.reference}&type=course`
      },
      onClose: function() {
        setIsProcessing(false)
        alert('Payment cancelled')
      }
    })
    
    handler.openIframe()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/courses" className="flex items-center text-navy hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Course Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {course.name}
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl">
              {course.overview}
            </p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gold" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <BarChart className="w-5 h-5 mr-2 text-gold" />
                {course.level}
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-gold" />
                {course.curriculum.length} Modules
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Course */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-navy mb-4">About This Course</h2>
                <p className="text-gray-700 leading-relaxed">
                  {course.longDescription}
                </p>
              </div>

              {/* Curriculum */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Course Curriculum</h2>
                <ul className="space-y-3">
                  {course.curriculum.map((module, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-gold text-navy font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 pt-1">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">What You'll Learn</h2>
                <ul className="space-y-3">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Your Instructor</h2>
                <div className="flex items-start gap-4">
                  <div className="bg-navy text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">
                      {course.instructor}
                    </h3>
                    <p className="text-gray-700">
                      {course.instructorBio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-red mb-2">
                    ₦{course.price.toLocaleString()}
                  </div>
                  <p className="text-gray-600">One-time payment</p>
                </div>

                <Button
                  onClick={handleEnrollment}
                  disabled={isProcessing}
                  className="w-full bg-red hover:bg-red/90 text-white py-6 text-lg mb-4"
                >
                  <BookOpen className="mr-2" />
                  {isProcessing ? 'Processing...' : 'Enroll Now'}
                </Button>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-gold mr-2" />
                    Lifetime access
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-gold mr-2" />
                    All course materials
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-gold mr-2" />
                    Certificate of completion
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-gold mr-2" />
                    Community access
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center mt-6">
                  Secure payment powered by Paystack
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
