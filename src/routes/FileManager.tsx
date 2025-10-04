import ReactFileManager from '@/components/CustomComp/FileManager'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/FileManager')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className='m-5'>
        <ReactFileManager/>
    </div>
  )

}
