import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import AppSidebar from '@/components/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import  Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'



const RootLayout = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <SidebarProvider>
    

      <div className="flex w-full h-full bg-[url('./../../Background.jpeg')] bg-[length:100%] bg-no-repeat bg-center">
        <AppSidebar />

        <div className="flex-1 p-8  flex flex-col ">
          {/* Rounded top container */}
          <div className="bg-[#110E13] rounded-t-3xl px-6 sticky z-2">
            <Navbar />
          </div>

          {/* Scrollable content below */}
          <div className="flex-1 rounded-b-3xl bg-[#110E13] py-2 z-1">
            <Outlet />
          </div>
        </div>
      </div>
      <TanStackRouterDevtools />
    </SidebarProvider>
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })