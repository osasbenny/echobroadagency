import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Package, BookOpen, DollarSign, Users, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data - in production, fetch from backend
  const stats = {
    totalProducts: 25,
    totalCourses: 12,
    totalRevenue: 2450000,
    totalCustomers: 1234,
    recentSales: 45
  }

  const recentTransactions = [
    {
      id: 1,
      customer: 'John Doe',
      item: 'Master Facebook Ads for Beginners',
      type: 'Course',
      amount: 35000,
      date: '2024-10-10',
      status: 'Completed'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      item: 'Ad Targeting Bundle',
      type: 'Product',
      amount: 15000,
      date: '2024-10-10',
      status: 'Completed'
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      item: 'Google Ads Essentials',
      type: 'Course',
      amount: 40000,
      date: '2024-10-09',
      status: 'Completed'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">
            Admin <span className="text-gold">Dashboard</span>
          </h1>
          <p className="text-gray-300 mt-2">Manage your products, courses, and sales</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <Package className="w-8 h-8 text-gold" />
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-navy">{stats.totalProducts}</div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <BookOpen className="w-8 h-8 text-gold" />
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-navy">{stats.totalCourses}</div>
              <div className="text-sm text-gray-600">Total Courses</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-8 h-8 text-gold" />
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-navy">
                ₦{(stats.totalRevenue / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-gold" />
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-navy">{stats.totalCustomers}</div>
              <div className="text-sm text-gray-600">Total Customers</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl font-bold text-navy">{stats.recentSales}</div>
              <div className="text-sm text-gray-600">Sales This Week</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-gold text-gold'
                      : 'text-gray-600 hover:text-navy'
                  }`}
                >
                  Recent Transactions
                </button>
                <button
                  onClick={() => setActiveTab('products')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'products'
                      ? 'border-b-2 border-gold text-gold'
                      : 'text-gray-600 hover:text-navy'
                  }`}
                >
                  Manage Products
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'courses'
                      ? 'border-b-2 border-gold text-gold'
                      : 'text-gray-600 hover:text-navy'
                  }`}
                >
                  Manage Courses
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-bold text-navy mb-4">Recent Transactions</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                            Customer
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                            Item
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                            Type
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                            Amount
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                            Date
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentTransactions.map((transaction) => (
                          <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm">{transaction.customer}</td>
                            <td className="py-3 px-4 text-sm">{transaction.item}</td>
                            <td className="py-3 px-4 text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                transaction.type === 'Course' 
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {transaction.type}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm font-semibold text-navy">
                              ₦{transaction.amount.toLocaleString()}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">
                              {new Date(transaction.date).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-4 text-sm">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                {transaction.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'products' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-navy">Manage Products</h3>
                    <Button className="bg-red hover:bg-red/90 text-white">
                      Add New Product
                    </Button>
                  </div>
                  <p className="text-gray-600">
                    Product management interface would go here. Features include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                    <li>Add new products with images, descriptions, and pricing</li>
                    <li>Edit existing product details</li>
                    <li>Delete products</li>
                    <li>View product sales statistics</li>
                    <li>Manage product inventory and downloads</li>
                  </ul>
                </div>
              )}

              {activeTab === 'courses' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-navy">Manage Courses</h3>
                    <Button className="bg-red hover:bg-red/90 text-white">
                      Add New Course
                    </Button>
                  </div>
                  <p className="text-gray-600">
                    Course management interface would go here. Features include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                    <li>Create new courses with curriculum and modules</li>
                    <li>Upload course videos and materials</li>
                    <li>Edit course content and pricing</li>
                    <li>View enrollment statistics</li>
                    <li>Manage student access and progress</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

