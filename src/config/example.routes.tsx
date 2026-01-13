import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Lazy load components for better performance
const Landing = lazy(() => import('@/app/example-ui/landing/page'))
const Dashboard = lazy(() => import('@/app/example-ui/dashboard/page'))
const Dashboard2 = lazy(() => import('@/app/example-ui/dashboard-2/page'))
const Mail = lazy(() => import('@/app/example-ui/mail/page'))
const Tasks = lazy(() => import('@/app/example-ui/tasks/page'))
const Chat = lazy(() => import('@/app/example-ui/chat/page'))
const Calendar = lazy(() => import('@/app/example-ui/calendar/page'))
const Users = lazy(() => import('@/app/example-ui/users/page'))
const FAQs = lazy(() => import('@/app/example-ui/faqs/page'))
const Pricing = lazy(() => import('@/app/example-ui/pricing/page'))

// Auth pages
const SignIn = lazy(() => import('@/app/example-ui/auth/sign-in/page'))
const SignIn2 = lazy(() => import('@/app/example-ui/auth/sign-in-2/page'))
const SignIn3 = lazy(() => import('@/app/example-ui/auth/sign-in-3/page'))
const SignUp = lazy(() => import('@/app/example-ui/auth/sign-up/page'))
const SignUp2 = lazy(() => import('@/app/example-ui/auth/sign-up-2/page'))
const SignUp3 = lazy(() => import('@/app/example-ui/auth/sign-up-3/page'))
const ForgotPassword = lazy(() => import('@/app/example-ui/auth/forgot-password/page'))
const ForgotPassword2 = lazy(() => import('@/app/example-ui/auth/forgot-password-2/page'))
const ForgotPassword3 = lazy(() => import('@/app/example-ui/auth/forgot-password-3/page'))

// Error pages
const Unauthorized = lazy(() => import('@/app/errors/unauthorized/page'))
const Forbidden = lazy(() => import('@/app/errors/forbidden/page'))
const NotFound = lazy(() => import('@/app/errors/not-found/page'))
const InternalServerError = lazy(() => import('@/app/errors/internal-server-error/page'))
const UnderMaintenance = lazy(() => import('@/app/errors/under-maintenance/page'))

// Settings pages
const UserSettings = lazy(() => import('@/app/example-ui/settings/user/page'))
const AccountSettings = lazy(() => import('@/app/example-ui/settings/account/page'))
const BillingSettings = lazy(() => import('@/app/example-ui/settings/billing/page'))
const AppearanceSettings = lazy(() => import('@/app/example-ui/settings/appearance/page'))
const NotificationSettings = lazy(() => import('@/app/example-ui/settings/notifications/page'))
const ConnectionSettings = lazy(() => import('@/app/example-ui/settings/connections/page'))

export interface RouteConfig {
  path: string
  element: React.ReactNode
  children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
  // Default route - redirect to dashboard
  // Use relative path "dashboard" instead of "/dashboard" for basename compatibility
  {
    path: "/example-ui/",
    element: <Navigate to="dashboard" replace />
  },

  // Landing Page
  {
    path: "/example-ui/landing",
    element: <Landing />
  },

  // Dashboard Routes
  {
    path: "/example-ui/dashboard",
    element: <Dashboard />
  },
  {
    path: "/example-ui/dashboard-2",
    element: <Dashboard2 />
  },

  // Application Routes
  {
    path: "/example-ui/mail",
    element: <Mail />
  },
  {
    path: "/example-ui/tasks",
    element: <Tasks />
  },
  {
    path: "/example-ui/chat",
    element: <Chat />
  },
  {
    path: "/example-ui/calendar",
    element: <Calendar />
  },

  // Content Pages
  {
    path: "/example-ui/users",
    element: <Users />
  },
  {
    path: "/example-ui/faqs",
    element: <FAQs />
  },
  {
    path: "/example-ui/pricing",
    element: <Pricing />
  },

  // Authentication Routes
  {
    path: "/example-ui/auth/sign-in",
    element: <SignIn />
  },
  {
    path: "/example-ui/auth/sign-in-2",
    element: <SignIn2 />
  },
  {
    path: "/example-ui/auth/sign-in-3",
    element: <SignIn3 />
  },
  {
    path: "/example-ui/auth/sign-up",
    element: <SignUp />
  },
  {
    path: "/example-ui/auth/sign-up-2",
    element: <SignUp2 />
  },
  {
    path: "/example-ui/auth/sign-up-3",
    element: <SignUp3 />
  },
  {
    path: "/example-ui/auth/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/example-ui/auth/forgot-password-2",
    element: <ForgotPassword2 />
  },
  {
    path: "/example-ui/auth/forgot-password-3",
    element: <ForgotPassword3 />
  },

  // Error Pages
  {
    path: "/example-ui/errors/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "/example-ui/errors/forbidden",
    element: <Forbidden />
  },
  {
    path: "/example-ui/errors/not-found",
    element: <NotFound />
  },
  {
    path: "/example-ui/errors/internal-server-error",
    element: <InternalServerError />
  },
  {
    path: "/example-ui/errors/under-maintenance",
    element: <UnderMaintenance />
  },

  // Settings Routes
  {
    path: "/example-ui/settings/user",
    element: <UserSettings />
  },
  {
    path: "/example-ui/settings/account",
    element: <AccountSettings />
  },
  {
    path: "/example-ui/settings/billing",
    element: <BillingSettings />
  },
  {
    path: "/example-ui/settings/appearance",
    element: <AppearanceSettings />
  },
  {
    path: "/example-ui/settings/notifications",
    element: <NotificationSettings />
  },
  {
    path: "/example-ui/settings/connections",
    element: <ConnectionSettings />
  },

  // Catch-all route for 404
  {
    path: "*",
    element: <NotFound />
  }
]
