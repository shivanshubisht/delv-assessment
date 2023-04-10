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
  gitHub: (props: IconProps) => (
    <span className="fill-current">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 438.549 438.549"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        ></path>
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
  chevronLeft: (props: IconProps) => (
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
        <polyline points="15 18 9 12 15 6"></polyline>
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
  close: (props: IconProps) => (
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
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </span>
  ),
  search: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 96 960 960"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M784 936L532 684q-30 24-69 38t-83 14q-109 0-184.5-75.5T120 476q0-109 75.5-184.5T380 216q109 0 184.5 75.5T640 476q0 44-14 83t-38 69l252 252-56 56zM380 656q75 0 127.5-52.5T560 476q0-75-52.5-127.5T380 296q-75 0-127.5 52.5T200 476q0 75 52.5 127.5T380 656z"></path>
      </svg>
    </span>
  ),
  spinner: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 96 960 960"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
      </svg>
    </span>
  ),
  google: (props: IconProps) => (
    <span className="fill-current text-slate-700 dark:text-slate-400">
      <svg
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 512 512"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
          fill="#fbbb00"
        ></path>
        <path
          d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
          fill="#518ef8"
        ></path>
        <path
          d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
          fill="#28b446"
        ></path>
        <path
          d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
          fill="#f14336"
        ></path>
      </svg>
    </span>
  ),
}
