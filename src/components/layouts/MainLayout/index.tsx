import { Outlet } from 'react-router-dom'

// import mainLayoutStyles from './MainLayout.module.scss'

const MainLayout = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default MainLayout
