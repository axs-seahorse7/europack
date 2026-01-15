const ArrowUpRight = ({
  size = 36,
  color = "#f58522",
  strokeWidth = 1,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      className={className}
    >
      <path d="M5 19L19 5" />
      <path d="M9 5H19" />
      <path d="M19 5V15" />
    </svg>
  );
};

export default ArrowUpRight;
