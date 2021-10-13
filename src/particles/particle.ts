import { Mouse, Point } from './types'

interface ParticleParams {
  dest: Point
  mouse: Mouse
  canvas: HTMLCanvasElement
  size: number
}

export class Particle {
  private x: number
  private y: number
  private dest: Point
  private mouse: Mouse
  private r: number
  private vx = (Math.random() - 0.5) * 50
  private vy = 0
  private accX = 0
  private accY = 0
  private friction = Math.random() * 0.05 + 0.94
  private color = 'white'

  private ctx: CanvasRenderingContext2D

  constructor(params: ParticleParams) {
    const { dest, mouse, canvas, size } = params
    this.ctx = canvas.getContext('2d')!
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.r = Math.random() * size
    this.mouse = mouse
    this.dest = {
      x: dest.x,
      y: dest.y,
    }
  }

  render() {
    this.accX = (this.dest.x - this.x) / 1000
    this.accY = (this.dest.y - this.y) / 1000
    this.vx += this.accX
    this.vy += this.accY
    this.vx *= this.friction
    this.vy *= this.friction

    this.x += this.vx
    this.y += this.vy

    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r, Math.PI * 2, 0, false)
    this.ctx.fill()

    let a = this.x - this.mouse.x
    let b = this.y - this.mouse.y

    let distance = Math.sqrt(a * a + b * b)
    if (distance < this.mouse.radius * 50) {
      this.accX = (this.x - this.mouse.x) / 100
      this.accY = (this.y - this.mouse.y) / 100
      this.vx += this.accX
      this.vy += this.accY
    }
  }
}
