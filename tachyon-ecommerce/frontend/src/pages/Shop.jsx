import { useState, useEffect } from 'react'
import { ShoppingCart, Check, AlertCircle } from 'lucide-react'

export default function Shop({ updateCartCount }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [addedItems, setAddedItems] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const handleAddToCart = async (product) => {
    try {
      const res = await fetch('http://localhost:8000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity: 1
        }),
      })

      if (res.ok) {
        // Simple state update to simulate cart counter (React useState requirement)
        updateCartCount(prev => prev + 1)
        
        // Show success icon temporarily
        setAddedItems(prev => ({ ...prev, [product.id]: true }))
        setTimeout(() => {
          setAddedItems(prev => ({ ...prev, [product.id]: false }))
        }, 2000)
      }
    } catch (err) {
      console.error("Failed to add to cart", err)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="inline-flex flex-col items-center p-8 glass border-red-500/50 rounded-xl">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <h2 className="text-xl font-bold text-red-400">Failed to load products</h2>
          <p className="text-foreground/70 mt-2">Please ensure the FastAPI backend is running on port 8000.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-glow">Cosmic Catalog</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="glass rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.2)] hover:-translate-y-1">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur text-xs px-2 py-1 rounded border border-white/10">
                {product.category}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold leading-tight">{product.name}</h2>
                <span className="text-primary font-mono text-lg">${product.price.toLocaleString()}</span>
              </div>
              <p className="text-foreground/70 text-sm mb-6 flex-grow">
                {product.description}
              </p>
              <button 
                onClick={() => handleAddToCart(product)}
                className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  addedItems[product.id] 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-white/5 hover:bg-primary hover:text-background border border-white/10'
                }`}
              >
                {addedItems[product.id] ? (
                  <>
                    <Check className="h-5 w-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
