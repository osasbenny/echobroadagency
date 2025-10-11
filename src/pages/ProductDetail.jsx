import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { Button } from '@/components/ui/button'
import { Check, ArrowLeft, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const [isProcessing, setIsProcessing] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Product not found</h2>
          <Link to="/store">
            <Button className="bg-navy hover:bg-navy/90 text-white">
              Back to Store
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const handlePayment = () => {
    setIsProcessing(true)
    
    // Initialize Paystack payment
    // Note: In production, you would use your live public key
    const handler = window.PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxxxx', // Replace with actual Paystack public key
      email: 'customer@email.com', // Get from user input or auth
      amount: product.price * 100, // Amount in kobo
      currency: 'NGN',
      ref: 'ECHO_' + Math.floor((Math.random() * 1000000000) + 1),
      metadata: {
        product_id: product.id,
        product_name: product.name,
      },
      callback: function(response) {
        // Verify payment on backend
        window.location.href = `/payment-success?reference=${response.reference}`
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
          <Link to="/store" className="flex items-center text-navy hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Store
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-red text-white px-4 py-2 rounded-full text-lg font-bold">
                ₦{product.price.toLocaleString()}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="text-sm font-semibold text-gold mb-2 uppercase">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-navy mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                {product.longDescription}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-navy mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase Button */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Price:</span>
                  <span className="text-3xl font-bold text-red">
                    ₦{product.price.toLocaleString()}
                  </span>
                </div>
                <Button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-red hover:bg-red/90 text-white py-6 text-lg"
                >
                  <ShoppingCart className="mr-2" />
                  {isProcessing ? 'Processing...' : 'Buy Now'}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Secure payment powered by Paystack
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/store/${relatedProduct.id}`}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-navy mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-red font-bold">
                      ₦{relatedProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

