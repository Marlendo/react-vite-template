import {
  LayoutPanelLeft,
  LayoutDashboard,
  Mail,
  CheckSquare,
  MessageCircle,
  Calendar,
  Shield,
  AlertTriangle,
  Settings,
  HelpCircle,
  CreditCard,
  LayoutTemplate,
  Users,
} from "lucide-react"

export const sidebarData = {
  user: {
    name: "ShadcnStore",
    email: "store@example.com",
    avatar: "",
  },
  navGroups: [
    {
      label: "Dashboards",
      items: [
        {
          title: "Dashboard 1",
          url: "/example/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Dashboard 2",
          url: "/example/dashboard-2",
          icon: LayoutPanelLeft,
        },
      ],
    },
    {
      label: "Apps",
      items: [
        {
          title: "Mail",
          url: "/example/mail",
          icon: Mail,
        },
        {
          title: "Tasks",
          url: "/example/tasks",
          icon: CheckSquare,
        },
        {
          title: "Chat",
          url: "/example/chat",
          icon: MessageCircle,
        },
        {
          title: "Calendar",
          url: "/example/calendar",
          icon: Calendar,
        },
        {
          title: "Users",
          url: "/example/users",
          icon: Users,
        },
      ],
    },
    {
      label: "Pages",
      items: [
        {
          title: "Landing",
          url: "/example/landing",
          target: "_blank",
          icon: LayoutTemplate,
        },
        {
          title: "Auth Pages",
          url: "#",
          icon: Shield,
          items: [
            {
              title: "Sign In 1",
              url: "/example/auth/sign-in",
            },
            {
              title: "Sign In 2",
              url: "/example/auth/sign-in-2",
            },
            {
              title: "Sign In 3",
              url: "/example/auth/sign-in-3",
            },
            {
              title: "Sign Up 1",
              url: "/example/auth/sign-up",
            },
            {
              title: "Sign Up 2",
              url: "/example/auth/sign-up-2",
            },
            {
              title: "Sign Up 3",
              url: "/example/auth/sign-up-3",
            },
            {
              title: "Forgot Password 1",
              url: "/example/auth/forgot-password",
            },
            {
              title: "Forgot Password 2",
              url: "/example/auth/forgot-password-2",
            },
            {
              title: "Forgot Password 3",
              url: "/example/auth/forgot-password-3",
            }
          ],
        },
        {
          title: "Errors",
          url: "#",
          icon: AlertTriangle,
          items: [
            {
              title: "Unauthorized",
              url: "/example/errors/unauthorized",
            },
            {
              title: "Forbidden",
              url: "/example/errors/forbidden",
            },
            {
              title: "Not Found",
              url: "/example/errors/not-found",
            },
            {
              title: "Internal Server Error",
              url: "/example/errors/internal-server-error",
            },
            {
              title: "Under Maintenance",
              url: "/example/errors/under-maintenance",
            },
          ],
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings,
          items: [
            {
              title: "User Settings",
              url: "/example/settings/user",
            },
            {
              title: "Account Settings",
              url: "/example/settings/account",
            },
            {
              title: "Plans & Billing",
              url: "/example/settings/billing",
            },
            {
              title: "Appearance",
              url: "/example/settings/appearance",
            },
            {
              title: "Notifications",
              url: "/example/settings/notifications",
            },
            {
              title: "Connections",
              url: "/example/settings/connections",
            },
          ],
        },
        {
          title: "FAQs",
          url: "/example/faqs",
          icon: HelpCircle,
        },
        {
          title: "Pricing",
          url: "/example/pricing",
          icon: CreditCard,
        },
      ],
    },
  ],
}