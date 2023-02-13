import type { NextPage } from 'next'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import { imgData } from 'data'
import Footer from '@/components/Footer'

const Home: NextPage = () => {
  const data = imgData

  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Crafted by us, for you
            </p>
          </div>
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
          Click on the image below for Details
        </div>
        <div className="mb-3 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {data.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
