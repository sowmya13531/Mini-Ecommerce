import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Tachyon Tech Shop API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins as per requirements
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Product(BaseModel):
    id: int
    name: str
    price: float
    description: str
    category: str
    image: str

class CartItem(BaseModel):
    product_id: int
    quantity: int

def load_and_filter_products(category: Optional[str] = None):
    # Requirement: Read a JSON file, filter list of dicts by condition
    try:
        with open("data/products.json", "r") as f:
            products = json.load(f)
            
            if category:
                # Filter condition
                filtered = [p for p in products if p.get("category", "").lower() == category.lower()]
                print(f"Filtered products for category '{category}': {filtered}")
                return filtered
            return products
    except Exception as e:
        print(f"Error reading products: {e}")
        return []

@app.get("/api/products", response_model=List[Product])
def get_products(category: Optional[str] = None):
    """
    Returns a list of futuristic products.
    Can optionally filter by category.
    """
    products = load_and_filter_products(category)
    return products

@app.post("/api/cart")
def add_to_cart(item: CartItem):
    """
    Simulates adding an item to the shopping cart.
    Demonstrates POST route with Pydantic validation.
    """
    if item.quantity <= 0:
        raise HTTPException(status_code=400, detail="Quantity must be greater than 0")
    
    print(f"Added product {item.product_id} to cart with quantity {item.quantity}")
    
    return {
        "message": "Product successfully added to cart",
        "cart_item": item,
        "status": "success"
    }
