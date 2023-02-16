import Footer from '@/components/Footer'
import Title from '@/components/title'
import { imgData } from '@/data/index'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './post-body.module.css'
import ScrollTop from '@/components/ScrollTop'

export default function Detail() {
  const router = useRouter()
  const { query } = router
  const [data] = imgData.filter((item) => item.id === query.id)

  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Title />
      <article>
        <h1 className="mb-12 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-7xl">
          {data?.name}
        </h1>
        <ScrollTop />
        <div className="mb-8 sm:mx-0 md:mb-16">
          <div className="sm:mx-0">
            <Image
              width={2000}
              height={1000}
              alt={`Cover Image for ${data?.title}`}
              src={data?.imageGroups.image.link}
              className={'shadow-small'}
            />
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className={styles.content}>
            <h1 className="text-4xl font-bold">页面功能简介：</h1>
            <p>{data?.one}</p>
            <ul>
              {data?.two.map((item: string) => {
                return <li key={item}>{item}</li>
              })}
            </ul>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
