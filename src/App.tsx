import { ParticledText } from './particles/ParticledText'
import './App.css'
import linked from './SocialMediaIcons/li.png'
import github from './SocialMediaIcons/gh.png'
import telegram from './SocialMediaIcons/tg.png'
import { SkillsCloud } from './TagCloud'

export const App = () => {
  return (
    <div className='App'>
      <div className='Content'>
        <ParticledText
          text='<Ann Kulakova/>'
          particleSize={3}
          height={300}
          smallScreenParticleFactor={0.5}
          smallScreenParticlesCount={210}
        />
        <div className='UnderTitle'>Developer</div>
        <div className='PortfolioLinks'>
          {' '}
          My Works
          <br />
          <a
            className='Links'
            href='https://resurgentfox.github.io/cozy-space-client/'
          >
            Web-App for chatting
          </a>
          <br />
          <a
            className='Links'
            href='https://resurgentfox.github.io/react-todo/'
          >
            ToDo List
          </a>
        </div>
        <div className='Skills'>
          <div className='SkillsTitle'>Skills</div> <br />
          <SkillsCloud />
        </div>
      </div>
      <div className='SocialMedia'>
        <a className='Icon' href='https://github.com/ResurgentFox'>
          <img src={github} alt='Github logo' width={50} height={50} />
        </a>
        <a className='Icon' href='https://t.me/ResurgentFox'>
          <img src={telegram} alt='Telegram logo' width={50} height={50} />
        </a>
        <a className='Icon' href='https://www.linkedin.com/in/annkulakova/'>
          <img src={linked} alt='Linkedin logo' width={50} height={50} />
        </a>
      </div>
    </div>
  )
}
