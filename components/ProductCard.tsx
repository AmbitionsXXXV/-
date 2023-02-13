import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'

export default function ProductCard(props: any) {
  const [isLoading, setLoading] = useState(true)
  const { product } = props

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image
            alt="product image"
            src={product.imageGroups.image.link}
            width={800}
            height={70}
            className={
              'object-cover duration-700 ease-in-out group-hover:opacity-75'
            }
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{product.name}</h3>
        </div>
        <p className="mt-1 text-sm italic text-gray-500">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  )
}
