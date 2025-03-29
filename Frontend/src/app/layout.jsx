import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx"
import { AppSidebar } from "@/components/app-sidebar.jsx"
import CreateNewPersonaButton from "../components/CreateNewPersonaButton.jsx"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
 
export default function Layout({ children }) {
  return (
    <>
    <SidebarProvider>
      <AppSidebar />
      
        <div className="w-full">  

          <header  className="flex justify-between items-center m-4">
            <div className="flex items-center space-x-2">
              <SidebarTrigger />
              <p>Dream Buyer Avatar</p>
            </div>
          </header>

          {children}

        </div>

        </SidebarProvider>
        
    </>
  )
}