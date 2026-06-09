"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/8">
              <div>
                <p className="label-eyebrow mb-1">Your Cart</p>
                <p className="text-xs text-brand-secondary">{totalItems} {totalItems === 1 ? "item" : "items"}</p>
              </div>
              <button
                onClick={closeCart}
                className="w-9 h-9 flex items-center justify-center border border-black/10 hover:bg-brand-off transition-colors"
                aria-label="Close cart"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8">
                  <ShoppingBag size={32} strokeWidth={1} className="text-black/20" />
                  <div>
                    <p className="text-brand-text font-medium mb-1">Your cart is empty</p>
                    <p className="text-sm text-brand-secondary">Explore our collections to find your next piece.</p>
                  </div>
                  <Link href="/collections" onClick={closeCart} className="btn-primary mt-2 text-xs py-3 px-6">
                    Shop Collections
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-black/8">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.variant.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-5 flex gap-4"
                    >
                      <div className="w-20 h-20 bg-brand-off flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.product.images[0].src}
                          alt={item.product.images[0].alt}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <p className="text-xs font-medium text-brand-text leading-tight">{item.product.name}</p>
                            <p className="text-xs text-brand-secondary mt-0.5">{item.variant.name}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.variant.id)}
                            className="text-black/30 hover:text-brand-text transition-colors ml-2 flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-black/10">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-brand-off transition-colors"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="w-7 text-center text-xs font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-brand-off transition-colors"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                          <p className="text-sm font-medium">
                            {formatPrice((item.product.price + (item.variant.additionalPrice ?? 0)) * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-black/8 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-secondary">Subtotal</span>
                  <span className="text-base font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-brand-secondary">Shipping calculated at checkout</p>
                <button className="btn-primary w-full justify-center gap-3">
                  Checkout
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-xs text-brand-secondary hover:text-brand-text transition-colors underline underline-offset-2"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
