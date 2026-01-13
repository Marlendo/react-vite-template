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
          url: "/example-ui/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Dashboard 2",
          url: "/example-ui/dashboard-2",
          icon: LayoutPanelLeft,
        },
      ],
    },
    {
      label: "Apps",
      items: [
        {
          title: "Mail",
          url: "/example-ui/mail",
          icon: Mail,
        },
        {
          title: "Tasks",
          url: "/example-ui/tasks",
          icon: CheckSquare,
        },
        {
          title: "Chat",
          url: "/example-ui/chat",
          icon: MessageCircle,
        },
        {
          title: "Calendar",
          url: "/example-ui/calendar",
          icon: Calendar,
        },
        {
          title: "Users",
          url: "/example-ui/users",
          icon: Users,
        },
      ],
    },
    {
      label: "Pages",
      items: [
        {
          title: "Landing",
          url: "/example-ui/landing",
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
              url: "/example-ui/auth/sign-in",
            },
            {
              title: "Sign In 2",
              url: "/example-ui/auth/sign-in-2",
            },
            {
              title: "Sign In 3",
              url: "/example-ui/auth/sign-in-3",
            },
            {
              title: "Sign Up 1",
              url: "/example-ui/auth/sign-up",
            },
            {
              title: "Sign Up 2",
              url: "/example-ui/auth/sign-up-2",
            },
            {
              title: "Sign Up 3",
              url: "/example-ui/auth/sign-up-3",
            },
            {
              title: "Forgot Password 1",
              url: "/example-ui/auth/forgot-password",
            },
            {
              title: "Forgot Password 2",
              url: "/example-ui/auth/forgot-password-2",
            },
            {
              title: "Forgot Password 3",
              url: "/example-ui/auth/forgot-password-3",
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
              url: "/example-ui/errors/unauthorized",
            },
            {
              title: "Forbidden",
              url: "/example-ui/errors/forbidden",
            },
            {
              title: "Not Found",
              url: "/example-ui/errors/not-found",
            },
            {
              title: "Internal Server Error",
              url: "/example-ui/errors/internal-server-error",
            },
            {
              title: "Under Maintenance",
              url: "/example-ui/errors/under-maintenance",
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
              url: "/example-ui/settings/user",
            },
            {
              title: "Account Settings",
              url: "/example-ui/settings/account",
            },
            {
              title: "Plans & Billing",
              url: "/example-ui/settings/billing",
            },
            {
              title: "Appearance",
              url: "/example-ui/settings/appearance",
            },
            {
              title: "Notifications",
              url: "/example-ui/settings/notifications",
            },
            {
              title: "Connections",
              url: "/example-ui/settings/connections",
            },
          ],
        },
        {
          title: "FAQs",
          url: "/example-ui/faqs",
          icon: HelpCircle,
        },
        {
          title: "Pricing",
          url: "/example-ui/pricing",
          icon: CreditCard,
        },
      ],
    },
  ],
}