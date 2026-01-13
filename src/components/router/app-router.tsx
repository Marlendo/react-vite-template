import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes, type RouteConfig } from '@/config/routes'
import { routes as routesExample } from '@/config/example.routes'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useENV } from '@/hooks/use-env'

function renderRoutes(routeConfigs: RouteConfig[]) {
  return routeConfigs.map((route, index) => (
    <Route
      key={route.path + index}
      path={route.path}
      element={
        <Suspense fallback={<LoadingSpinner />}>
          {route.element}
        </Suspense>
      }
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ))
}

export function AppRouter() {

  const { DEV } = useENV();

  if (DEV) {
    return (
      <Routes>
        {renderRoutes([...routes, ...routesExample])}
      </Routes>
    )
  }

  return (
    <Routes>
      {renderRoutes(routes)}
    </Routes>
  )
}
