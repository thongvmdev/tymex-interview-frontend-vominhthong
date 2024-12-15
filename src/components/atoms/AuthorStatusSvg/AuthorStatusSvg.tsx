import { AuthorStatus } from '~/interfaces'

const AuthorStatusSvg = ({ status }: { status: AuthorStatus }) => {
  const linearGradientMapping = {
    online: ['#49DD81', '#22B4C6'],
    offline: ['#FE5A5A', '#F163D2'],
    busy: ['#FE5A5A', '#F163D2'],
    idle: ['#FE5A5A', '#F163D2']
  } as Record<AuthorStatus, string[]>

  const linearGradient = linearGradientMapping[status]
  const gradientId = `gradient-${Date.now()}`

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
      <g clip-path='url(#clip0_274_32)'>
        <path
          d='M7.66668 4L6.85334 3.07L6.96668 1.84L5.76334 1.56667L5.13334 0.5L4.00001 0.986667L2.86668 0.5L2.23668 1.56333L1.03334 1.83333L1.14668 3.06667L0.333344 4L1.14668 4.93L1.03334 6.16333L2.23668 6.43667L2.86668 7.5L4.00001 7.01L5.13334 7.49667L5.76334 6.43333L6.96668 6.16L6.85334 4.93L7.66668 4ZM3.12668 5.33667L2.33334 4.53667C2.30244 4.50583 2.27793 4.4692 2.2612 4.42887C2.24447 4.38855 2.23586 4.34532 2.23586 4.30167C2.23586 4.25801 2.24447 4.21478 2.2612 4.17446C2.27793 4.13413 2.30244 4.0975 2.33334 4.06667L2.35668 4.04333C2.48668 3.91333 2.70001 3.91333 2.83001 4.04333L3.36668 4.58333L5.08334 2.86333C5.21334 2.73333 5.42668 2.73333 5.55668 2.86333L5.58001 2.88667C5.71001 3.01667 5.71001 3.22667 5.58001 3.35667L3.60668 5.33667C3.47001 5.46667 3.26001 5.46667 3.12668 5.33667Z'
          fill={`url(#${gradientId})`}
        />
        <path
          d='M3.12669 5.33664L2.33335 4.53664C2.30245 4.5058 2.27793 4.46917 2.26121 4.42885C2.24448 4.38853 2.23587 4.3453 2.23587 4.30164C2.23587 4.25799 2.24448 4.21476 2.26121 4.17443C2.27793 4.13411 2.30245 4.09748 2.33335 4.06664L2.35669 4.04331C2.48669 3.91331 2.70002 3.91331 2.83002 4.04331L3.36669 4.58331L5.08335 2.86331C5.21335 2.73331 5.42669 2.73331 5.55669 2.86331L5.58002 2.88664C5.71002 3.01664 5.71002 3.22664 5.58002 3.35664L3.60669 5.33664C3.47002 5.46664 3.26002 5.46664 3.12669 5.33664Z'
          fill='#F5F8FA'
        />
      </g>
      <defs>
        <linearGradient id={gradientId} x1='0.333344' y1='0.5' x2='7.6829' y2='0.517079' gradientUnits='userSpaceOnUse'>
          <stop stop-color={linearGradient?.[0]} />
          <stop offset='1' stop-color={linearGradient?.[1]} />
        </linearGradient>
        <clipPath id='clip0_274_32'>
          <rect width='8' height='8' rx='4' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default AuthorStatusSvg
