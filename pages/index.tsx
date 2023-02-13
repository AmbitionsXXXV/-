import type { NextPage } from 'next'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'

const Home: NextPage = () => {
  const data: any[] = [
    {
      imageGroups: { image: { link: '/login.png' } },
      name: '登陆注册页面',
      shortDescription: '功能：用户进入主页前的登陆注册',
      id: 1
    },
    {
      imageGroups: { image: { link: '/addUser.png' } },
      name: '用户管理页面',
      shortDescription: '功能：负责操作管理用户',
      id: 2
    },
    {
      imageGroups: { image: { link: '/itemBank.png' } },
      name: '题库管理页面',
      shortDescription: '功能：负责操作管理题库',
      id: 3
    },
    {
      imageGroups: { image: { link: '/addPaper.png' } },
      name: '考试试卷管理页面',
      shortDescription: '功能：操作管理试卷页面',
      id: 4
    },
    {
      imageGroups: { image: { link: '/paperList.png' } },
      name: '试卷题目页面',
      shortDescription: '功能：列表形式展示所有试卷',
      id: 5
    },
    {
      imageGroups: { image: { link: '/users.png' } },
      name: '用户列表页面',
      shortDescription: '功能：展示所有用户及所拥有的权限',
      id: 6
    }
  ]

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
        <div className="mb-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {data.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
