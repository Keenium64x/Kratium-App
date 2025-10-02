import Gantt from '@/components/CustomComp/Gantt'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/Gantt')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
      <div className='h-full p-2'>
        <Gantt/>
      </div>
  )
}
