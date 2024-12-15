import { lazy, LazyExoticComponent } from 'react'

const MainLayout = lazy(() => import('~/components/layouts/MainLayout'))
const Marketplace = lazy(() => import('~/components/pages/Marketplace'))

interface Route {
  path: string
  element: LazyExoticComponent<React.ComponentType<any>>
  children?: Route[]
  index?: boolean
}

const RoutesConfig: Route[] = [
  {
    path: '/',
    element: MainLayout,
    children: [
      {
        path: 'marketplace',
        element: Marketplace
      }
    ]
  }
]

export default RoutesConfig
