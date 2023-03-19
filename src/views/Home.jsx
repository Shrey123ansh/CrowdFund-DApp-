import React,{useEffect} from 'react'
import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

const Home = () => {
  const [projects] = useGlobalState("projects")
  useEffect(async() => {
    await loadProjects()
  }, [])
  return (
    <div>
      <Hero />
      <Projects projects={projects}/>
      <div>
        
      </div>
      <CreateProject />
      <AddButton />
    </div>
  )
} 

export default Home
