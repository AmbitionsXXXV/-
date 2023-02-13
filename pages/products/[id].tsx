import Footer from '@/components/Footer'
import Title from '@/components/title'
import { imgData } from '@/data/index'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './post-body.module.css'

export default function Detail() {
  const router = useRouter()
  const { query } = router
  const [data] = imgData.filter((item) => item.id == query.id)

  return (
    <div className="container mx-auto px-5">
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Title />
      <article>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {data?.name}
        </h1>
        <div className="mb-8 md:mb-16 sm:mx-0">
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
        <div className="max-w-2xl mx-auto">
          <div className={styles.content}>
            <h2>功能介绍</h2>
            <p>用于为系统拥有者提供管理用户的权限，包括：</p>
            <ul>
              <li>增加管理员</li>
              <li>修改管理员拥有的权限</li>
              <li>控制某一管理员是否还存在</li>
            </ul>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
