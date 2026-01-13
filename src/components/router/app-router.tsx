import { Suspense, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes, type RouteConfig } from '@/config/routes'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
// import { useENV } from '@/hooks/use-env'

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
  const isDev = import.meta.env.DEV;

  if (isDev) {
    const [devRoutes, setDevRoutes] = useState<any[]>([]);

    useEffect(() => {
      import("@/config/example.routes").then((m) => {
        setDevRoutes(m.routes);
      });
    }, []);

    return (
      <Routes>
        {renderRoutes([...routes, ...devRoutes])}
      </Routes>
    );
  }

  return (
    <Routes>
      {renderRoutes(routes)}
    </Routes>
  );
}
