import { Particle } from './particles/particle'
import { ParticledText } from './particles/ParticledText'
import './App.css'

export const App = () => {
  return (
    <div className='App'>
      <ParticledText text='<Ann Kulakova/>' particleSize={3} />
      <div className='UnderTitle'>Developer</div>
      <div className='PortfolioLinks'> My Works <br/>
        <a className='Links' href='https://resurgentfox.github.io/cozy-space-client/'>Web-App for chatting </a> <br/>
        <a className='Links' href='https://resurgentfox.github.io/react-todo/'>ToDo List</a>
      </div>
    </div>
  )
}
