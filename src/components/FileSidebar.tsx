import { BriefcaseBusiness, Calendar, ChevronDown, ChevronUp, FileCode, FolderOpen, FolderRoot, GanttChart, Hammer, House, LayoutDashboardIcon, NotebookPen, NotebookPenIcon, ScrollText, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  Sidebarroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
  SidebarGroup,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"



export default function AppSidebar() {
  
  return (
    <Sidebar className="border-none font-serif" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/" className="py-6 pt-8">
                <Avatar className="w-6 h-6 mr-2">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span >Kratium</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* <SidebarSeparator/> */}

      <SidebarContent>
        
        <SidebarGroup>
        <SidebarGroupLabel>Routes</SidebarGroupLabel>
          <SidebarGroupContent>
          <SidebarMenuButton asChild>
            <Link to="/"> <House/> Home</Link>
          </SidebarMenuButton>

         {/* <SidebarSeparator className="mt-4"/> */}
          <SidebarGroupLabel className="mt-4">Planning</SidebarGroupLabel>

          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton asChild><Link to="/StatePlanning">
                  Planning System <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" /></Link>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><ScrollText/> Planning Master</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><NotebookPen/> StatePlanning</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><BriefcaseBusiness/> Work Planning</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton asChild><Link to="/StatePlanning">
                  Knowledge System <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" /></Link>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><FolderRoot/>Knowledge Order</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/File_System"><FolderOpen/>File System</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><FileCode/>File Editor</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          {/* <SidebarSeparator className="mt-4"/> */}
          <SidebarGroupLabel className="mt-4">Execution</SidebarGroupLabel>

          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton asChild><Link to="/StatePlanning">
                  Time System <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" /></Link>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><GanttChart/>Gantt</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><Calendar/>Calander</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><Hammer/>Workspaces</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          <Collapsible  className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton asChild><Link to="/StatePlanning">
                  Ability System <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" /></Link>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              

              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><GanttChart/>Gantt</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><Calendar/>Calander</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/StatePlanning"><Hammer/>Workspaces</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2/> Keenan Solomon <ChevronUp className="ml-auto"/>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end"> 
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
