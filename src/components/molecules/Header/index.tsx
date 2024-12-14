import { Drawer, Flex, Layout, Space } from 'antd'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import headerStyles from './Header.module.scss'
import Button from '~/components/atoms/Button'
import { CloseCircleFilled, DownOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const NAV_ITEMS = [
  { path: '/home', label: 'Home' },
  { path: '/about-us', label: 'About Us' },
  { path: '/our-team', label: 'Our Team' },
  { path: '/marketplace', label: 'MarketPlace' },
  { path: '/roadmap', label: 'Roadmap' },
  { path: '/whitepaper', label: 'WhitePaper' }
]

const { Header: AntHeader } = Layout

type NavMenuProps = {
  onClick?: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ onClick }) => (
  <nav className={headerStyles.menu}>
    {NAV_ITEMS.map(({ path, label }) => (
      <NavLink
        key={path}
        to={path}
        className={({ isActive }) => classNames(headerStyles['menu-item'], { [headerStyles.active]: isActive })}
        onClick={onClick}
      >
        {label}
      </NavLink>
    ))}
  </nav>
)

const Header = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 })
  const [drawerVisible, setDrawerVisible] = useState(false)
  const toggleDrawer = () => setDrawerVisible(!drawerVisible)

  return (
    <AntHeader className={classNames(headerStyles.gnb)}>
      <Flex justify='space-between' align='center' className={headerStyles.header}>
        {isMobileOrTablet ? (
          <>
            <MenuOutlined className={headerStyles.colorIcon} onClick={toggleDrawer} />
            <Drawer
              closeIcon={<CloseCircleFilled className={headerStyles.colorIcon} />}
              className={headerStyles.drawerMenu}
              placement='left'
              onClose={toggleDrawer}
              open={drawerVisible}
              width={250}
            >
              <NavMenu onClick={toggleDrawer} />
            </Drawer>
          </>
        ) : (
          <NavMenu />
        )}
        <Flex align='center' gap={40}>
          <Button color='secondary'>Connect Wallet</Button>
          <Space>
            <GlobalOutlined className={headerStyles.colorIcon} />
            <DownOutlined className={headerStyles.colorIcon} />
          </Space>
        </Flex>
      </Flex>
    </AntHeader>
  )
}

export default Header
