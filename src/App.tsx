import { ParticledText } from './particles/ParticledText'
import './App.css'
import { TagCloud } from 'react-tagcloud'
import  linked  from './SocialMediaIcons/li.png'
import  github  from './SocialMediaIcons/gh.png'
import  telegram  from './SocialMediaIcons/tg.png'

const data = [
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 36 },
  { value: 'TypeScript', count: 30 },
  { value: 'Node.js', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'WebSockets', count: 26 },
  { value: 'MongoDB', count: 24 },
  { value: 'HTML5', count: 22 },
  { value: 'CSS3', count: 22 },
  { value: 'Styled-components', count: 26 },
  { value: 'CSS-modules', count: 22 },
  { value: 'Git', count: 25 },
  { value: 'Figma', count: 25 },
]

const customRenderer = (tag: any, size: number, color: string) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      margin: '3px',
      padding: '3px',
      color: `${color}`,
    }}
  >
    {tag.value}
  </span>
)

const options = {
  luminosity: 'light',
  hue: 'blue',
}

const SkillsCloud = (): any => (
  <TagCloud
    minSize={1}
    maxSize={7}
    tags={data}
    renderer={customRenderer}
    colorOptions={options}
  />
)

export const App = () => {
  return (
    <div className='App'>
      <ParticledText text='<Ann Kulakova/>' particleSize={3} height={300} />
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
        <a className='Links' href='https://resurgentfox.github.io/react-todo/'>
          ToDo List
        </a>
      </div>
      <div className='Skills'>
        <div className='SkillsTitle'>Skills</div> <br />
        <SkillsCloud />
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
