import React, { createContext, useContext, useState } from 'react';
import { Product, CartItem } from '../types';
import { INITIAL_PRODUCTS } from '../data/mockData';

interface AppContextValue {
  products: Product[];
  cartItems: CartItem[];
  cartItemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
  toastMessage: string | null;
  setToastMessage: (msg: string | null) => void;
  handleAddToCart: (product: Product, quantityOrEvent?: number | React.MouseEvent) => void;
  handleUpdateQuantity: (productId: string, delta: number) => void;
  handleRemoveItem: (productId: string) => void;
  handleClearCart: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    setToastMessage('Item removed from cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartItems,
        cartItemCount,
        isCartOpen,
        setIsCartOpen,
        selectedProduct,
        setSelectedProduct,
        isProfileOpen,
        setIsProfileOpen,
        toastMessage,
        setToastMessage,
        handleAddToCart,
        handleUpdateQuantity,
        handleRemoveItem,
        handleClearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
