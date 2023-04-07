import type { SVGProps } from "react"

interface IconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number
}

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1.5em"
      width="1.5em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  ),
  menu: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
    </span>
  ),
  sun: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    </span>
  ),
  moon: (props: IconProps) => (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1.5em"
      width="1.5em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  ),
  laptop: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
      </svg>
    </span>
  ),
  check: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
  ),
  chevronRight: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </span>
  ),
  chevronDown: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </span>
  ),
  circle: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    </span>
  ),
}
