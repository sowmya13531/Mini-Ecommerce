import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

function App() {
  const [cartCount, setCartCount] = useState(0)

  // This simple state helps update the navbar count when items are added
  const updateCartCount = (count) => {
    setCartCount(count)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartCount={cartCount} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop updateCartCount={updateCartCount} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer className="glass py-6 text-center text-foreground/60 text-sm mt-12">
        <p>&copy; 2026 Tachyon Tech Shop. Cosmic deliveries guaranteed.</p>
      </footer>
    </div>
  )
}

export default App
