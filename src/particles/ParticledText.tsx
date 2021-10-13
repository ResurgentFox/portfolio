import * as React from 'react'
import { Particle } from './particle'
import { Mouse, Point } from './types'


interface Props {
  text: string
  width?: number
  height?: number
  chaotic?: boolean
  particleSize?: number
}

export class ParticledText extends React.PureComponent<Props> {
  private ref = React.createRef<HTMLCanvasElement>()
  private particles: Particle[] = []
  private mouse: Mouse = { x: 0, y: 0, radius: 0.7 }

  private getCanvas() {
    return this.ref.current
  }

  private getContext() {
    return this.getCanvas()?.getContext('2d')
  }

  private getCanvasPosition(): Point {
    const canvas = this.getCanvas()
    const rect = canvas?.getBoundingClientRect() || { left: 0, top: 0 }
    return { x: rect.left, y: rect.top }
  }

  private initScene = () => {
    const count = 300
    const size = this.props.particleSize || 1
    const canvas = this.getCanvas()
    const ctx = this.getContext()
    if (!canvas || !ctx) {
      return
    }

    canvas.width = this.props.width ?? window.innerWidth
    canvas.height = this.props.height ?? window.innerHeight
    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)
    this.particles = []

    ctx.font = `bold  ${width / 10}px sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(this.props.text, width / 2, height / 2)

    const data = ctx.getImageData(0, 0, width, height).data
    ctx.clearRect(0, 0, width, height)
    ctx.globalCompositeOperation = 'screen'

    for (let x = 0; x < width; x += Math.round(width / count)) {
      for (let y = 0; y < height; y += Math.round(width / count)) {
        if (data[(x + y * width) * 4 + 3] > 180) {
          const mouse = this.mouse
          const dest = { x, y }
          if (this.props.chaotic) {
            dest.x += Math.random() * 5 - 10
            dest.y += Math.random() * 5 - 10
          }

          this.particles.push(new Particle({ dest, mouse, canvas, size }))
        }
      }
    }
  }

  private onMouseMove = (e: MouseEvent) => {
    const pos = this.getCanvasPosition()
    this.mouse.x = e.clientX - pos.x
    this.mouse.y = e.clientY - pos.y
  }

  private onTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      const pos = this.getCanvasPosition()
      this.mouse.x = e.touches[0].clientX - pos.x
      this.mouse.y = e.touches[0].clientY - pos.y
    }
  }

  private onTouchEnd = () => {
    this.mouse.x = -9999
    this.mouse.y = -9999
  }

  private onMouseClick = () => {
    this.mouse.radius += 1
    if (this.mouse.radius > 3) {
      this.mouse.radius = 1
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('touchmove', this.onTouchMove)
    window.addEventListener('touchend', this.onTouchEnd)
    window.addEventListener('click', this.onMouseClick)
    window.addEventListener('resize', this.initScene)
    this.initScene()
    this.renderFrame()
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('touchmove', this.onTouchMove)
    window.removeEventListener('touchend', this.onTouchEnd)
    window.removeEventListener('click', this.onMouseClick)
    window.removeEventListener('resize', this.initScene)
  }

  renderFrame = () => {
    const canvas = this.getCanvas()
    const ctx = this.getContext()
    requestAnimationFrame(this.renderFrame)

    if (!canvas || !ctx) {
      return
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const particle of this.particles) {
      particle.render()
    }
  }

  render() {
    return (
      <canvas ref={this.ref}>
        Your browser does not support Canvas
      </canvas>
    )
  }
}
