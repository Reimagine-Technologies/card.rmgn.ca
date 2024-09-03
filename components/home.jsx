import { Button } from "@/components/ui/button";

export default function AppleStyleLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
        Think Different
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mb-8">
        Discover the power of innovation with our groundbreaking products.
      </p>
      <Button
        size="lg"
        className="text-lg px-8 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
      >
        Learn More
      </Button>
    </div>
  );
}
