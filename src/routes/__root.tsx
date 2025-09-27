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
    
      <Menu >
        <SubMenu label="Charts" >
          <Separator />
          <MenuItem component={<Link to="/about" className="[&.active]:font-bold" />}> Pie charts </MenuItem>
          <MenuItem component={<Link to="/" className="[&.active]:font-bold" />}> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
        <SubMenu className='mt-20px' label="Settings" >
          <MenuItem> Profile </MenuItem>
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