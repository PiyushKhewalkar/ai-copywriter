import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx"
import { AppSidebar } from "@/components/app-sidebar.jsx"
import CreateNewPersonaButton from "../components/CreateNewPersonaButton.jsx"
 
export default function Layout({ children }) {
  return (
    <>
    <SidebarProvider>
      <AppSidebar />
        <div className="w-full">
        <div className="flex justify-between items-center m-4">
        <SidebarTrigger />
        <CreateNewPersonaButton />
        </div>
        {children}
        </div>
        </SidebarProvider>   x
    </>
  )
}