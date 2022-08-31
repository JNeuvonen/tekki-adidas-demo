export const ArrowRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" fill="none">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M20.175 7H0V5h20.175l-3.293-3.293L18.296.293 24.003 6l-5.707 5.707-1.414-1.414L20.175 7Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const Chevron = ({ styles }: { styles?: any }) => {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18px"
      height="18px"
      style={styles}
    >
      <path d="M 8 3 L 14 12 L 8 21 L 12 21 L 18 12 L 12 3 L 8 3 z" />
    </svg>
  )
}
