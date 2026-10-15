import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  direction?: 'right' | 'left' | 'up-right'
}

export default function ArrowIcon({ direction = 'right', className = '', ...props }: Props) {
  const paths = {
    right: 'M4 12h16m-6-6 6 6-6 6',
    left: 'M20 12H4m6-6-6 6 6 6',
    'up-right': 'M6 18 18 6M6 6h12v12',
  }

  return (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`} aria-hidden="true" focusable="false">
      <path d={paths[direction]} />
    </svg>
  )
}
