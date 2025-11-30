import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import BackToTopButton from './BackToTopButton'
import Home from './Home'
import Services from './Services'
import Store from './Store'
import ProductDetail from './ProductDetail'
import Courses from './Courses'
import CourseDetail from './CourseDetail'
import Blog from './Blog'
import About from './About'
import Contact from './Contact'
import UserDashboard from './UserDashboard'
import AdminDashboard from './AdminDashboard'
import PaymentSuccess from './PaymentSuccess'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:id" element={<ProductDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTopButton />
      </div>
    </Router>
  )
}

export default App

