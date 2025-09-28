import { createFileRoute } from '@tanstack/react-router'
import StatePlanning from './../components/CustomComp/StatePlanning'

export const Route = createFileRoute('/StatePlanning')({
  component: About,
})

function About() {
  return <StatePlanning />
}