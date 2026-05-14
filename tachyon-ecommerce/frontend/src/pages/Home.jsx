import { Link } from 'react-router-dom'
import { Rocket, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-float">
          <span className="block text-glow">The Future is</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Now Available
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-foreground/80 mx-auto mb-10">
          Equip yourself with the most advanced cosmic gadgets, quantum tools, and hyper-drive vehicles in the known universe.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/shop"
            className="bg-primary text-background px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(0,255,204,0.5)] hover:shadow-[0_0_25px_rgba(0,255,204,0.8)]"
          >
            Explore Catalog
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="glass p-8 rounded-2xl flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
          <div className="p-4 bg-primary/20 rounded-full mb-4">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Tachyon Speed Delivery</h3>
          <p className="text-foreground/70">Your items arrive before you even order them. (Temporal paradoxes not covered by warranty).</p>
        </div>
        <div className="glass p-8 rounded-2xl flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
          <div className="p-4 bg-secondary/20 rounded-full mb-4">
            <Shield className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Quantum Encrypted</h3>
          <p className="text-foreground/70">100% secure checkout powered by entangled particles. Your data is literally unhackable.</p>
        </div>
        <div className="glass p-8 rounded-2xl flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
          <div className="p-4 bg-accent/20 rounded-full mb-4">
            <Rocket className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-2">Galactic Support</h3>
          <p className="text-foreground/70">Our AI agents are available 24/7 across all 11 dimensions to assist with your purchases.</p>
        </div>
      </div>
    </div>
  )
}
