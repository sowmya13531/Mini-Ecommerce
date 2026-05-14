import { NavLink } from 'react-router-dom'
import { ShoppingCart, Zap, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
  ]

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl tracking-wider text-glow">TACHYON</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-primary bg-white/10' 
                        : 'text-foreground/80 hover:text-primary hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink 
                to="/cart"
                className={({ isActive }) => 
                  `relative px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                    isActive ? 'text-primary bg-white/10' : 'text-foreground/80 hover:text-primary hover:bg-white/5'
                  }`
                }
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute w-full left-0 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-primary bg-white/10' : 'text-foreground hover:text-primary hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                  isActive ? 'text-primary bg-white/10' : 'text-foreground hover:text-primary hover:bg-white/5'
                }`
              }
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart ({cartCount})</span>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
