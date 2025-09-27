import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./../index.css"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"



const RootLayout = () => (
  <>

  <div className='flex'>
    
    <Sidebar className='h-screen' collapsed={false} collapsedWidth='0px'>

  <Menu>
    {/* Category 1 */}
    <div className="px-3 py-2 text-xs font-semibold uppercase text-gray-400">
      Project Files
    </div>
    <SubMenu label="src">
      <MenuItem>App.tsx</MenuItem>
      <MenuItem>main.tsx</MenuItem>
    </SubMenu>
    <SubMenu label="components">
      <MenuItem>Button.tsx</MenuItem>
      <MenuItem>Card.tsx</MenuItem>
    </SubMenu>

    {/* Gap between categories */}
    <div className="my-3 border-t border-gray-700" />

    {/* Category 2 */}
    <div className="px-3 py-2 text-xs font-semibold uppercase text-gray-400">
      Settings
    </div>
    <SubMenu label="User">
      <MenuItem>Profile</MenuItem>
      <MenuItem>Preferences</MenuItem>
    </SubMenu>
    <SubMenu label="System">
      <MenuItem>Logs</MenuItem>
      <MenuItem><Link to="/about">about</Link></MenuItem>
    </SubMenu>
  </Menu>
</Sidebar>
    <Card className='w-full'>
      <Outlet />
    </Card>
  </div>
  
  <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })