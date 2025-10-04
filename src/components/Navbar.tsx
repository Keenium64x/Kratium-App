import { Link, useMatches } from '@tanstack/react-router'
import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'
import { SidebarTrigger } from './ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { useTheme } from "@/components/theme-provider"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb'





export default function Navbar() {
    const { setTheme } = useTheme();
    const matches = useMatches();

    const humanize = (str: string) => str.replace(/[-_]/g, ' ').replace(/^\w/, c => c.toUpperCase());



  const filteredMatches = matches.filter(
    (match, idx, arr) =>
      match.pathname && arr.findIndex(m => m.pathname === match.pathname) === idx
      );
  return (
    <nav className="flex py-2.5 px-6 items-center justify-between border-b ">
        <div className='flex items-center gap-6'>
            <SidebarTrigger />

            <Breadcrumb>
              <BreadcrumbList>
                {filteredMatches.map((match, idx) => {
                  // access handle safely using `as any`
                  const name =
                    (match as any).handle?.breadcrumbName ||
                    humanize(match.pathname.replace('/', '')) ||
                    'Home';
                  const path = match.pathname || '/';

                  return (
                    <BreadcrumbItem key={idx}>
                      <BreadcrumbLink asChild>
                      <span>
                        <Link to={path}>{name}</Link>
                      </span>
                      </BreadcrumbLink>
                      {idx < filteredMatches.length - 1 && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          
        </div>
        <div className='flex items-center gap-4'>

            <Link to="/">Dashboard</Link>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

            
            <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
             <DropdownMenuContent sideOffset={10}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem><User className='h-[1.2rem] w-[1.2rem] mr-2'/>Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings className='h-[1.2rem] w-[1.2rem] mr-2'/>Settings</DropdownMenuItem>
                <DropdownMenuItem variant='destructive'><LogOut className='h-[1.2rem] w-[1.2rem] mr-2'/>Logout</DropdownMenuItem>
             </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav>
  )
}


