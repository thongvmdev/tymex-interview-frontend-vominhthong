import { Spin } from 'antd'
import { Suspense } from 'react'
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom'

import RoutesConfig from './RoutesConfig'

const Routes = () => {
  return (
    <ReactRoutes>
      {RoutesConfig.map((item) => {
        const { element: Component, children = [], path } = item

        return (
          <Route key={path} element={<Suspense fallback={<Spin fullscreen />}>{<Component />}</Suspense>} path={path}>
            {children.map(({ path: childPath, element: ChildComponent, index }) => {
              return (
                <Route
                  key={childPath}
                  path={childPath}
                  element={<Suspense fallback={<Spin fullscreen />}>{<ChildComponent />}</Suspense>}
                />
              )
            })}
          </Route>
        )
      })}

      <Route path='*' element={<Navigate to={'/marketplace'} />} />
    </ReactRoutes>
  )
}

export default Routes
