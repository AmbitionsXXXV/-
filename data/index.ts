interface GroupItem {
  image: {
    link: string
  }
}
interface DataItem {
  imageGroups: GroupItem
  name: string
  shortDescription: string
  id: string
  title: string
  one: string
  two: string[]
}

export const imgData: DataItem[] = [
  {
    imageGroups: { image: { link: '/login.png' } },
    name: '登陆注册页面',
    shortDescription: '功能：用户进入主页前的登陆注册',
    id: '1',
    title: 'LoginPage',
    one: '常规登陆注册，默认注册为普通管理员。同时本系统提供有超级管理员账号，有最高操作权限',
    two: [
      '每个用户进入系统都必须注册账号',
      '未注册账号登陆会被提示进入注册页面',
      '每个路由都有路由导航,禁止用户进行非法跳转',
      '登陆后进入主页'
    ]
  },
  {
    imageGroups: { image: { link: '/addUser.png' } },
    name: '用户管理页面',
    shortDescription: '功能：负责操作管理用户',
    id: '2',
    title: 'AddUserPage',
    one: '查看用户列表，并对管理员以及超级管理员提供有修改用户权限的功能',
    two: [
      '在管理员列表里新增一位管理员',
      '修改某一管理员现有权限',
      '彻底删除某一管理员',
      '查找管理员账号',
      '查看管理员账号详细信息'
    ]
  },
  {
    imageGroups: { image: { link: '/itemBank.png' } },
    name: '题库管理页面',
    shortDescription: '功能：负责操作管理题库',
    id: '3',
    title: 'ItemBankPage',
    one: '为管理员对题库操作提供场景，包括从题库中添加、修改、删除以及按照条件筛选题目',
    two: ['题库筛查']
  },
  {
    imageGroups: { image: { link: '/addPaper.png' } },
    name: '考试试卷管理页面',
    shortDescription: '功能：操作管理试卷页面',
    id: '4',
    title: 'AddPaperPage',
    one: '查看用户列表，并对管理员以及超级管理员提供有修改用户权限的功能',
    two: []
  },
  {
    imageGroups: { image: { link: '/paperList.png' } },
    name: '试卷题目页面',
    shortDescription: '功能：列表形式展示所有试卷',
    id: '5',
    title: 'PaperListPage',
    one: '查看用户列表，并对管理员以及超级管理员提供有修改用户权限的功能',
    two: []
  },
  {
    imageGroups: { image: { link: '/users.png' } },
    name: '用户列表页面',
    shortDescription: '功能：展示所有用户及所拥有的权限',
    id: '6',
    title: 'UsersPage',
    one: '查看用户列表，并对管理员以及超级管理员提供有修改用户权限的功能',
    two: []
  }
]
