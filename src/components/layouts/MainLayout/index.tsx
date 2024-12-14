import React from 'react'
import mainLayoutStyles from './MainLayout.module.scss'
import Header from '~/components/molecules/Header'
import { Outlet } from 'react-router-dom'
import { Image, Layout } from 'antd'
import Footer from '~/components/molecules/Footer'
import decorationImg from '~/assets/images/decoration.png'

const { Content } = Layout

const MainLayout: React.FC = () => {
  return (
    <Layout className={mainLayoutStyles.layout}>
      <Header />
      <Content className={mainLayoutStyles.content}>
        <Outlet />
        <Image className={mainLayoutStyles.decoration} preview={false} src={decorationImg} />
      </Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
