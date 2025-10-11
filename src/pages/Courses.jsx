import { Link } from 'react-router-dom'
import { courses } from '../data/courses'
import { Button } from '@/components/ui/button'
import { BookOpen, Clock, BarChart } from 'lucide-react'

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Master Digital <span className="text-gold">Marketing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts and transform your career with our comprehensive online courses
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {course.name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      by {course.instructor}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    {course.overview}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gold" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BarChart className="w-4 h-4 mr-2 text-gold" />
                      {course.level}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2 text-gold" />
                      {course.curriculum.length} Modules
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-red">
                        ₦{course.price.toLocaleString()}
                      </span>
                    </div>
                    <Link to={`/courses/${course.id}`}>
                      <Button className="bg-navy hover:bg-navy/90 text-white">
                        View Course
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            Why Learn With <span className="text-red">EchoBroad</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with proven track records
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Lifetime Access</h3>
              <p className="text-gray-600">
                Access course materials anytime, anywhere, forever
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Real Results</h3>
              <p className="text-gray-600">
                Practical strategies you can implement immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg mb-6">
            Join thousands of students who have transformed their careers
          </p>
          <Link to="/contact">
            <Button className="bg-white text-red hover:bg-gray-100 px-8 py-4">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

