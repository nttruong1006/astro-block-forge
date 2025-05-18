import { useState } from 'react'

import { cn } from '@/lib/utils'
import logo from '@/assets/images/logo.svg'

export default function Header() {
  // States
  const [isExpanded, setIsExpanded] = useState(false)

  // Methods
  const handleToggleExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <header className='font-heading'>
      <div className='container flex items-center justify-between py-6 md:py-8'>
        <img src={logo.src} alt='Logo' />

        <div className='flex items-center gap-4'>
          <button className='relative hidden bg-fuchsia-500/20 px-4 py-2 text-sm font-bold tracking-wide uppercase md:inline-flex'>
            <span className='absolute top-0 left-0 size-full mask-[linear-gradient(225deg,transparent_10px,black_10px)] outline-2 -outline-offset-2 outline-fuchsia-500'></span>

            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute top-0 right-0 mask-b-to-fuchsia-500 mask-cover text-fuchsia-500'
            >
              <path d='M0 1H12.2667L23 11.7333V24' stroke='currentColor' strokeWidth='2'></path>
            </svg>

            <span className='leading-6'>get started</span>
          </button>

          <button className='group relative size-10' aria-expanded={isExpanded} onClick={handleToggleExpanded}>
            <div
              className={cn(
                'absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 bg-zinc-300 transition-transform',
                isExpanded ? 'rotate-45' : '-translate-y-1'
              )}
            ></div>
            <div
              className={cn(
                'absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 bg-zinc-300 transition-transform',
                isExpanded ? '-rotate-45' : 'translate-y-1'
              )}
            ></div>
          </button>
        </div>
      </div>
    </header>
  )
}
