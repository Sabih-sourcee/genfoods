import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ProductShowcase } from './components/ProductShowcase';
import { BrandStory } from './components/BrandStory';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { OurStoryModal } from './components/OurStoryModal';
import { ProfileModal } from './components/ProfileModal';
import { Toast } from './components/Toast';
import { INITIAL_PRODUCTS, REVIEWS } from './data/mockData';
import { Product, CartItem } from './types';

export default function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isOurStoryOpen, setIsOurStoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart total items count
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Add product to cart handler
  const handleAddToCart = (product: Product, quantityOrEvent?: number | React.MouseEvent) => {
    const qty = typeof quantityOrEvent === 'number' ? quantityOrEvent : 1;

    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevItems, { product, quantity: qty }];
    });

    setToastMessage(`Added ${qty}x ${product.name} to your cart!`);
  };

  // Update cart item quantity
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Remove cart item
  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    setToastMessage('Item removed from cart');
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Smooth entry animation effect replicating original script
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('section > div');
    animatedElements.forEach((el) => {
      el.classList.add(
        'transition-all',
        'duration-1000',
        'opacity-0',
        'translate-y-10'
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FFF8EF] font-['DM_Sans',sans-serif] text-[#3D1E52] min-h-screen selection:bg-[#FF7A45] selection:text-white">
      {/* Header */}
      <Header
        cartItemCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Content */}
      <main className="w-full pt-20 bg-[#FFF8EF]">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <HeroSection onOpenOurStory={() => setIsOurStoryOpen(true)} />

          {/* Trust Strip */}
          <TrustStrip />

          {/* Product Showcase */}
          <ProductShowcase
            products={products}
            onAddToCart={(prod, e) => handleAddToCart(prod, e)}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
          />

          {/* Brand Story */}
          <BrandStory onOpenOurStory={() => setIsOurStoryOpen(true)} />

          {/* Testimonials */}
          <Testimonials reviews={REVIEWS} />

          {/* CTA Banner */}
          <CtaBanner onOpenStoreLocator={() => setIsStoreLocatorOpen(true)} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenOurStory={() => setIsOurStoryOpen(true)}
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        onSelectCategory={() => {
          const el = document.getElementById('products');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod, qty) => handleAddToCart(prod, qty)}
      />

      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      <OurStoryModal
        isOpen={isOurStoryOpen}
        onClose={() => setIsOurStoryOpen(false)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
