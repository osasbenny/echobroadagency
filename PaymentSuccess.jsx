import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, Download, BookOpen } from 'lucide-react'

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams()
  const reference = searchParams.get('reference')
  const type = searchParams.get('type')

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your transaction has been completed successfully.
          </p>

          {/* Transaction Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="text-sm text-gray-600 mb-2">Transaction Reference</div>
            <div className="text-lg font-mono font-semibold text-navy break-all">
              {reference || 'ECHO_XXXXXXXXXX'}
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-navy mb-4">What's Next?</h2>
            <div className="text-left space-y-3 text-gray-700">
              {type === 'course' ? (
                <>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>You now have lifetime access to your course</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>A confirmation email has been sent to your inbox</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>Start learning immediately from your dashboard</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>Your digital product is ready for download</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>A confirmation email with download link has been sent</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <span>Access your purchases anytime from your dashboard</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 w-full sm:w-auto">
                {type === 'course' ? (
                  <>
                    <BookOpen className="mr-2" />
                    Go to Dashboard
                  </>
                ) : (
                  <>
                    <Download className="mr-2" />
                    Go to Dashboard
                  </>
                )}
              </Button>
            </Link>
            <Link to="/">
              <Button className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 w-full sm:w-auto">
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Support */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Need help? <Link to="/contact" className="text-red hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
