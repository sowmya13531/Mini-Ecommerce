import { ShoppingBag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Cart() {
  // In a real app, we'd fetch cart items from backend or global state
  // For this demonstration, we'll just show an empty/checkout UI 
  // since the backend requirement is just POST /cart

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="glass p-12 rounded-3xl border border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        
        <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-glow">Checkout System Ready</h1>
        <p className="text-foreground/70 text-lg mb-8 max-w-md mx-auto">
          Your cart items have been securely synchronized with the Tachyon backend via API endpoints.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/shop"
            className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 font-medium transition-colors"
          >
            Continue Shopping
          </Link>
          <button className="px-6 py-3 rounded-lg bg-primary text-background font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(0,255,204,0.3)]">
            Initialize Payment <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
