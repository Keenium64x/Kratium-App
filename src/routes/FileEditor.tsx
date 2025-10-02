import FileTree from '@/components/FileTree'
import { createFileRoute } from '@tanstack/react-router'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from '@/components/ui/scroll-area'

import { useClickStore } from '@/components/FileTree'
import MDEditor from '@/components/CustomComp/MDEditor'


export const Route = createFileRoute('/FileEditor')({
  component: RouteComponent,
})

function RouteComponent() {

  const fileExtention = useClickStore((s) => s.clickedValue)
  
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
            {fileExtention === "md" ? (
              <MDEditor mdInput={fileExtention}/>
            ) : fileExtention === "doc" || fileExtention === "docx" || fileExtention === "xls" || fileExtention === "xlsx" || fileExtention === "ppt" || fileExtention === "pptx" ? (
              <h1>Office Viewer</h1>
            ) : fileExtention ? (
              <h1>default viewer</h1>
            ) : (
              <div>Select a file...</div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}