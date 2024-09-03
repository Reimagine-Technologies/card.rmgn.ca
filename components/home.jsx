"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function Component() {
  const Skeleton = ({ width, height }) => (
    <div
      className="animate-pulse bg-gray-200 rounded"
      style={{ width, height }}
    ></div>
  );

  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
      setLoading(false);
    }, 1400);
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const productRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-stone-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          {loading ? (
            <SkeletonTitle className="text-3xl" />
          ) : (
            <p className={`${animate ? "animate-fade-in" : ""}`}>
              The modern credit card
            </p>
          )}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mb-8">
          {loading ? (
            <SkeletonSubtitle className="text-3xl" />
          ) : (
            <p className={`${animate ? "animate-fade-in" : ""}`}>
              Discover a fully stainless steel payment card without the hefty
              annual fee.
            </p>
          )}
        </p>
        <div>
          {loading ? (
            <SkeletonButton className="text-3xl" />
          ) : (
            <div className={`${animate ? "animate-fade-down" : ""}`}>
              <Button
                size="lg"
                className="text-lg px-8 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Button>
            </div>
          )}
        </div>

        <div className="mt-16 animate-bounce">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section
        ref={productRef}
        className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Product"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Product
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the future with our innovative product. Designed to
              transform your daily life, it combines cutting-edge technology
              with sleek, minimalist design.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
function SkeletonTitle({ className }) {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded w-96 h-16 ${className}`}
    ></div>
  );
}
function SkeletonSubtitle({ className }) {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded w-80 h-20 ${className}`}
    ></div>
  );
}
function SkeletonButton({ className }) {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded w-32 h-11 ${className}`}
    ></div>
  );
}
