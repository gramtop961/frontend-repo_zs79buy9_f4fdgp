import { forwardRef } from 'react'
import { motion } from 'framer-motion'

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto max-w-[1320px] px-6 sm:px-8 ${className}`}>{children}</div>
)

export const Section = ({ className = '', children, id }) => (
  <section id={id} className={`py-16 sm:py-24 ${className}`}>{children}</section>
)

export const Eyebrow = ({ children, className = '' }) => (
  <p className={`uppercase tracking-wide text-sm text-neutral-500 ${className}`}>{children}</p>
)

export const H1 = ({ children, className = '' }) => (
  <h1 className={`text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 ${className}`}>{children}</h1>
)

export const H2 = ({ children, className = '' }) => (
  <h2 className={`text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 ${className}`}>{children}</h2>
)

export const H3 = ({ children, className = '' }) => (
  <h3 className={`text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 ${className}`}>{children}</h3>
)

export const Lead = ({ children, className = '' }) => (
  <p className={`text-lg sm:text-xl leading-relaxed text-neutral-700 ${className}`}>{children}</p>
)

export const Button = ({ as = 'button', href, children, variant = 'primary', className = '', onClick }) => {
  const base = 'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variants = {
    primary: 'bg-[var(--accent,#9A6B4F)] text-white hover:brightness-105 shadow-sm hover:shadow focus-visible:ring-[var(--accent,#9A6B4F)]',
    secondary: 'border border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-300',
    ghost: 'text-neutral-900 hover:bg-neutral-100'
  }
  const Comp = href ? 'a' : as
  const props = href ? { href } : { onClick }
  return (
    <Comp {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Comp>
  )
}

export const Card = ({ className = '', children }) => (
  <div className={`group rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition overflow-hidden ${className}`}>{children}</div>
)

export const MotionDiv = motion.div
