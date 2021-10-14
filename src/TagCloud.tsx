import { TagCloud } from 'react-tagcloud'

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

const getAdaptiveMaxSize = (size: number) => {
  const query = window.matchMedia('(max-width: 600px)')
  return query.matches ? size / 2 : size
}

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

export const SkillsCloud = () => (
  <TagCloud
    className='TagCloud'
    minSize={1}
    maxSize={getAdaptiveMaxSize(7)}
    tags={data}
    renderer={customRenderer}
    colorOptions={options}
  />
)
