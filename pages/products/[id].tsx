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
        <div className="border-b-2 border-b-gray-300 pb-12">
          <h1 className="mb-12 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-7xl">
            {data?.name}
          </h1>
          <ScrollTop />
          <div className="mb-8 sm:mx-0 md:mb-16">
            <div className="sm:mx-0">
              <Image
                width={1800}
                height={1000}
                alt={`Cover Image for ${data?.title}`}
                src={data?.imageGroups[0].link}
                className={'shadow-small'}
              />
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className={styles.content}>
              <h1 className="font-bold md:text-2xl lg:text-4xl">
                页面功能简介：
              </h1>
              <p className="text-lg font-bold">{data?.one}</p>
              <ul>
                {data?.two.map((item: string) => {
                  return (
                    <li key={item} className="text-lg font-bold">
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          {data?.imageGroups.length > 1 && (
            <>
              <h1 className="mb-8 mt-12 text-center text-3xl font-bold leading-tight tracking-tighter md:text-left md:text-4xl md:leading-none lg:text-5xl">
                操作弹窗
              </h1>
              <div className="mb-8 sm:mx-0 md:mb-16">
                <div className="sm:mx-0">
                  <Image
                    width={1800}
                    height={1000}
                    alt={`Cover Image for ${data?.title}`}
                    src={data?.imageGroups[1].link}
                    className={'shadow-small'}
                  />
                </div>
              </div>
              <div className="mx-auto max-w-4xl">
                <div className={styles.content}>
                  <h2 className="font-bold md:text-xl lg:text-3xl">在弹窗中</h2>
                  <p className="text-lg font-bold">{data?.three!}</p>
                  <ul>
                    {data?.four!.map((item: string) => {
                      return (
                        <li key={item} className="text-lg font-bold">
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </article>
      <Footer />
    </div>
  )
}
