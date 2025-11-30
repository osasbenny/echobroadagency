import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { BookOpen, ShoppingBag, Download, Play } from 'lucide-react'

export default function UserDashboard() {
  // Mock user data - in production, fetch from backend
  const user = {
    name: 'John Doe',
    email: 'john@example.com'
  }

  const enrolledCourses = [
    {
      id: 1,
      name: 'Master Facebook Ads for Beginners',
      progress: 45,
      lastAccessed: '2 days ago'
    },
    {
      id: 3,
      name: 'Google Ads Essentials',
      progress: 20,
      lastAccessed: '1 week ago'
    }
  ]

  const purchasedProducts = [
    {
      id: 1,
      name: 'Ad Targeting Bundle (Facebook & Instagram)',
      purchaseDate: '2024-10-05',
      downloadUrl: '#'
    },
    {
      id: 2,
      name: 'Ad Copywriting Templates',
      purchaseDate: '2024-10-01',
      downloadUrl: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, <span className="text-gold">{user.name}</span>!
          </h1>
          <p className="text-gray-300">{user.email}</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* My Courses */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-navy flex items-center">
                <BookOpen className="mr-3 text-gold" />
                My Courses
              </h2>
              <Link to="/courses">
                <Button className="bg-navy hover:bg-navy/90 text-white">
                  Browse More Courses
                </Button>
              </Link>
            </div>

            {enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="border-2 border-gray-200 rounded-lg p-6 hover:border-gold transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-navy mb-3">
                      {course.name}
                    </h3>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gold h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Last accessed: {course.lastAccessed}
                      </span>
                      <Button className="bg-red hover:bg-red/90 text-white">
                        <Play className="mr-2 w-4 h-4" />
                        Continue
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">You haven't enrolled in any courses yet</p>
                <Link to="/courses">
                  <Button className="bg-navy hover:bg-navy/90 text-white">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* My Products */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-navy flex items-center">
                <ShoppingBag className="mr-3 text-gold" />
                My Products
              </h2>
              <Link to="/store">
                <Button className="bg-navy hover:bg-navy/90 text-white">
                  Browse Store
                </Button>
              </Link>
            </div>

            {purchasedProducts.length > 0 ? (
              <div className="space-y-4">
                {purchasedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between border-2 border-gray-200 rounded-lg p-6 hover:border-gold transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Purchased on: {new Date(product.purchaseDate).toLocaleDateString()}
                      </p>
                    </div>
                    <Button className="bg-red hover:bg-red/90 text-white">
                      <Download className="mr-2 w-4 h-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">You haven't purchased any products yet</p>
                <Link to="/store">
                  <Button className="bg-navy hover:bg-navy/90 text-white">
                    Browse Store
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/store"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center"
            >
              <ShoppingBag className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Browse Products</h3>
              <p className="text-gray-600 text-sm">
                Discover premium digital marketing resources
              </p>
            </Link>

            <Link
              to="/courses"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center"
            >
              <BookOpen className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Explore Courses</h3>
              <p className="text-gray-600 text-sm">
                Learn from industry experts
              </p>
            </Link>

            <Link
              to="/contact"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center"
            >
              <Download className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy mb-2">Get Support</h3>
              <p className="text-gray-600 text-sm">
                Need help? Contact our team
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
