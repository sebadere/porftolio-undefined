import { HomeHeaderComponent } from '../components/HomeHeaderComponent'
import { ProjectsListComponent } from '../components/ProjectsListComponent'
import { About } from './About'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <div>
      <HomeHeaderComponent />
      <About/>
      <ProjectsListComponent/>
      <Contact/>
    </div>
  )
}
