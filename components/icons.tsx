import type { SVGProps } from "react";





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
    <span className="fill-current text-black dark:text-white">
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
  copy: (props: IconProps) => (
    <span className="fill-current text-black dark:text-white">
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
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </span>
  ),
  user: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 96 960 960"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z" />
      </svg>
    </span>
  ),
}