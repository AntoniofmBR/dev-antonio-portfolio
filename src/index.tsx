import { Homepage } from './pages/homepage';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { SomeProjects } from './pages/some_projects';

export function Index() {
  return (
    <div>
      <Homepage />
      <About />
      <SomeProjects />
      <Contact />
    </div>
  )
}