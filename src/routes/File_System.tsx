import FileTree from '@/components/FileTree'
import { createFileRoute } from '@tanstack/react-router'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from '@/components/ui/scroll-area'



export const Route = createFileRoute('/File_System')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full">
      {/* File Tree Panel */}
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={33.33} minSize={16.665}>
        <div className="py-2 h-[800px]">
          <ScrollArea className="h-full w-full">

            <div className='mr-2'>
              <div className=" my-2"></div>
              <FileTree />
            </div>

          </ScrollArea>
        </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Editor Panel Placeholder */}
        <ResizablePanel defaultSize={66.66}>
        <div className="flex-1 h-full p-4">
          <div className="h-full w-full bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Editor Placeholder</span>
          </div>
        </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}