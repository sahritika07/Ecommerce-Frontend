// @ts-ignore
// @ts-nocheck

"use client"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { ArrowLeft, ArrowRight, Star, Zap, Shield, Smile } from "lucide-react"
import { Link } from "react-router-dom"
import { useRef, useState } from "react"

const Home = () => {
  const products = Array(5).fill({
    image: "https://images.stockcake.com/public/d/c/3/dc3f0d00-c078-40e6-9673-fa3eaef4b3c8_large/sunlit-beach-grace-stockcake.jpg"
    ,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  // Handle Next Button Click
  const nextSlide = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0) // Loop back to the first item
    }
  }

  // Handle Previous Button Click
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(products.length - 1) // Loop back to the last item
    }
  }

  const [title, setTitle] = useState("Welcome to Fashnova!")
  const [subtitle, setSubtitle] = useState("Where Fashion Meets Confidence.")

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100 flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <section className="text-center mb-12 max-w-4xl">
       <h1 className="text-5xl font-serif font-bold -mt-2  bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
  {title ? title : "Welcome to Fashnova"}
</h1>

<p className="text-2xl text-teal-700 mb-4">
  {subtitle ? subtitle : "Experience the future of simplicity and efficiency."}
</p>

<div className="w-screen max-w-full mx-auto rounded-2xl">
  <img
    className="w-full h-[450px] rounded-2xl object-cover"
    src="https://images.stockcake.com/public/a/3/7/a37f3eee-1f0d-425c-9f95-f2fe541a0037_large/elegance-in-light-stockcake.jpg"
    alt=""
  />
</div>


        <Link to="/client/products">
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Featured Products Section */}
      <section className="w-full max-w-6xl mb-5">
        <h2 className="text-4xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
          Featured Products
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-teal-50 transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft className="w-5 h-5 text-teal-600" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 300}px)` }}
              ref={carouselRef}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="min-w-[300px] mx-3 h-64 shadow-xl rounded-xl overflow-hidden group transform transition-all hover:scale-105 duration-300 ease-in-out relative"
                >
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt="Product"
                      className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Product Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 transform translate-y-2 group-hover:translate-y-0">
                    <div className="backdrop-blur-sm bg-white/10 p-3 rounded-lg">
                      <h3 className="text-lg text-white font-semibold">Trending Product</h3>
                      <p className="text-sm text-white/90">Discover our latest collection</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-teal-50 transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-5 h-5 text-teal-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-6xl w-full mb-16 mt-5">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="rounded-xl w-full h-64 overflow-hidden shadow-lg group perspective-1000">
              <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src="https://images.stockcake.com/public/2/c/d/2cd65d9a-03cf-4036-8617-d078feba3568_large/sophisticated-urban-style-stockcake.jpg"
                    alt="Product Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-6 text-white">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Product {index + 1}</h3>
                    <p className="text-sm">
                      Discover our amazing collection with premium quality and innovative design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-4xl w-full mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg group overflow-hidden relative bg-gradient-to-br from-white to-teal-50 hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="flex items-center gap-3 text-teal-700">
                <div className="p-2 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-all duration-300">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                Lightning-Fast Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-teal-700 text-sm">
                Experience blazing speeds with our optimized platform that delivers results in milliseconds, not
                seconds.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg group overflow-hidden relative bg-gradient-to-br from-white to-teal-50 hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="flex items-center gap-3 text-teal-700">
                <div className="p-2 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-all duration-300">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                Enterprise-Grade Security
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-teal-700 text-sm">
                Rest easy with our military-grade encryption and advanced security protocols protecting your data 24/7.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg group overflow-hidden relative bg-gradient-to-br from-white to-teal-50 hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="flex items-center gap-3 text-teal-700">
                <div className="p-2 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-all duration-300">
                  <Smile className="h-6 w-6 text-emerald-600" />
                </div>
                Intuitive User Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-teal-700 text-sm">
                Our thoughtfully designed interface makes complex tasks simple, with a learning curve measured in
                minutes, not days.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="max-w-6xl w-full mb-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl w-full h-[300px] overflow-hidden shadow-lg group relative">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://images.stockcake.com/public/4/1/3/413de925-3b21-4cd5-b186-b37587a5904e_large/vintage-golden-hour-stockcake.jpg"
                alt="Product Image"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end transition-all duration-500">
              <div className="p-6 text-white backdrop-blur-sm bg-teal-800/30 w-full rounded-t-xl transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p className="text-sm text-white/80 max-h-20 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                  Crafted with attention to every detail, ensuring the highest standards
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl w-full h-[300px] overflow-hidden shadow-lg group relative">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://images.stockcake.com/public/4/1/3/413de925-3b21-4cd5-b186-b37587a5904e_large/vintage-golden-hour-stockcake.jpg"
                alt="Product Image"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end transition-all duration-500">
              <div className="p-6 text-white backdrop-blur-sm bg-teal-800/30 w-full rounded-t-xl transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-2">Innovative Design</h3>
                <p className="text-sm text-white/80 max-h-20 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                  Setting new standards in the industry with cutting-edge approaches
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl w-full mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              review: "This app has transformed my workflow. It's fast, reliable, and easy to use.",
              stars: 5,
            },
            {
              name: "Jane Smith",
              review: "The security features are top-notch. I feel very safe using this app.",
              stars: 4,
            },
            {
              name: "Sam Johnson",
              review: "The user interface is intuitive and makes navigation a breeze.",
              stars: 4,
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-teal-700 italic">"{testimonial.review}"</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.stars ? "fill-teal-400 text-teal-400" : "text-gray-300"}`}
                      />
                    ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="text-center max-w-4xl w-full py-12 px-4 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-2xl backdrop-blur-sm shadow-lg mb-16 border border-emerald-200/50">
        <p className="text-2xl text-teal-800 mb-8">Ready to transform your experience? Get started today!</p>
        <Button
          variant="default"
          size="lg"
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  )
}

export default Home
