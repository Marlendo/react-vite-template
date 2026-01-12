import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Lazy load components for better performance
const Landing = lazy(() => import('@/app/example/landing/page'))
const Dashboard = lazy(() => import('@/app/example/dashboard/page'))
const Dashboard2 = lazy(() => import('@/app/example/dashboard-2/page'))
const Mail = lazy(() => import('@/app/example/mail/page'))
const Tasks = lazy(() => import('@/app/example/tasks/page'))
const Chat = lazy(() => import('@/app/example/chat/page'))
const Calendar = lazy(() => import('@/app/example/calendar/page'))
const Users = lazy(() => import('@/app/example/users/page'))
const FAQs = lazy(() => import('@/app/example/faqs/page'))
const Pricing = lazy(() => import('@/app/example/pricing/page'))

// Auth pages
const SignIn = lazy(() => import('@/app/example/auth/sign-in/page'))
const SignIn2 = lazy(() => import('@/app/example/auth/sign-in-2/page'))
const SignIn3 = lazy(() => import('@/app/example/auth/sign-in-3/page'))
const SignUp = lazy(() => import('@/app/example/auth/sign-up/page'))
const SignUp2 = lazy(() => import('@/app/example/auth/sign-up-2/page'))
const SignUp3 = lazy(() => import('@/app/example/auth/sign-up-3/page'))
const ForgotPassword = lazy(() => import('@/app/example/auth/forgot-password/page'))
const ForgotPassword2 = lazy(() => import('@/app/example/auth/forgot-password-2/page'))
const ForgotPassword3 = lazy(() => import('@/app/example/auth/forgot-password-3/page'))

// Error pages
const Unauthorized = lazy(() => import('@/app/errors/unauthorized/page'))
const Forbidden = lazy(() => import('@/app/errors/forbidden/page'))
const NotFound = lazy(() => import('@/app/errors/not-found/page'))
const InternalServerError = lazy(() => import('@/app/errors/internal-server-error/page'))
const UnderMaintenance = lazy(() => import('@/app/errors/under-maintenance/page'))

// Settings pages
const UserSettings = lazy(() => import('@/app/example/settings/user/page'))
const AccountSettings = lazy(() => import('@/app/example/settings/account/page'))
const BillingSettings = lazy(() => import('@/app/example/settings/billing/page'))
const AppearanceSettings = lazy(() => import('@/app/example/settings/appearance/page'))
const NotificationSettings = lazy(() => import('@/app/example/settings/notifications/page'))
const ConnectionSettings = lazy(() => import('@/app/example/settings/connections/page'))

export interface RouteConfig {
  path: string
  element: React.ReactNode
  children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
  // Default route - redirect to dashboard
  // Use relative path "dashboard" instead of "/dashboard" for basename compatibility
  {
    path: "/example/",
    element: <Navigate to="dashboard" replace />
  },

  // Landing Page
  {
    path: "/example/landing",
    element: <Landing />
  },

  // Dashboard Routes
  {
    path: "/example/dashboard",
    element: <Dashboard />
  },
  {
    path: "/example/dashboard-2",
    element: <Dashboard2 />
  },

  // Application Routes
  {
    path: "/example/mail",
    element: <Mail />
  },
  {
    path: "/example/tasks",
    element: <Tasks />
  },
  {
    path: "/example/chat",
    element: <Chat />
  },
  {
    path: "/example/calendar",
    element: <Calendar />
  },

  // Content Pages
  {
    path: "/example/users",
    element: <Users />
  },
  {
    path: "/example/faqs",
    element: <FAQs />
  },
  {
    path: "/example/pricing",
    element: <Pricing />
  },

  // Authentication Routes
  {
    path: "/example/auth/sign-in",
    element: <SignIn />
  },
  {
    path: "/example/auth/sign-in-2",
    element: <SignIn2 />
  },
  {
    path: "/example/auth/sign-in-3",
    element: <SignIn3 />
  },
  {
    path: "/example/auth/sign-up",
    element: <SignUp />
  },
  {
    path: "/example/auth/sign-up-2",
    element: <SignUp2 />
  },
  {
    path: "/example/auth/sign-up-3",
    element: <SignUp3 />
  },
  {
    path: "/example/auth/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/example/auth/forgot-password-2",
    element: <ForgotPassword2 />
  },
  {
    path: "/example/auth/forgot-password-3",
    element: <ForgotPassword3 />
  },

  // Error Pages
  {
    path: "/example/errors/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "/example/errors/forbidden",
    element: <Forbidden />
  },
  {
    path: "/example/errors/not-found",
    element: <NotFound />
  },
  {
    path: "/example/errors/internal-server-error",
    element: <InternalServerError />
  },
  {
    path: "/example/errors/under-maintenance",
    element: <UnderMaintenance />
  },

  // Settings Routes
  {
    path: "/example/settings/user",
    element: <UserSettings />
  },
  {
    path: "/example/settings/account",
    element: <AccountSettings />
  },
  {
    path: "/example/settings/billing",
    element: <BillingSettings />
  },
  {
    path: "/example/settings/appearance",
    element: <AppearanceSettings />
  },
  {
    path: "/example/settings/notifications",
    element: <NotificationSettings />
  },
  {
    path: "/example/settings/connections",
    element: <ConnectionSettings />
  },

  // Catch-all route for 404
  {
    path: "*",
    element: <NotFound />
  }
]
