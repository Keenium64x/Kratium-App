import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import AppSidebar from '../components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import  Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'


const RootLayout = () => (
<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <SidebarProvider>
      <div className="flex w-full h-screen bg-black">
        <AppSidebar />
        <div className="flex-1 p-4">
          {/* Rounded content container */}
          <div className="bg-[#110E13] rounded-xl px-6 min-h-full">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
      <TanStackRouterDevtools />
    </SidebarProvider>
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })