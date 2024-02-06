import { HomeHeaderComponent } from '../components/HomeHeaderComponent'
import { ProjectsListComponent } from '../components/ProjectsListComponent'
import { About } from './About'

export const Home = () => {
  return (
    <div>
      <HomeHeaderComponent />
      <About/>
      <ProjectsListComponent/>
    </div>
  )
}
