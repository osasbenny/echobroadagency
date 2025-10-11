import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

export default function Store() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Products <span className="text-gold">&</span> Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium templates, guides, and toolkits to accelerate your digital marketing success
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ₦{product.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-gold mb-2 uppercase">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.shortDescription}
                  </p>
                  <Link to={`/store/${product.id}`}>
                    <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-lg text-navy/80 mb-6">
            We can create custom templates and resources tailored to your specific needs
          </p>
          <Link to="/contact">
            <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

