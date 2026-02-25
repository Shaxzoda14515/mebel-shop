const Warning = ({
    size = 20,
    color = "#FFF",
    strokeWidth = 2,
    className = "",
  }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="32" cy="32" r="24" />
        <line x1="32" y1="16" x2="32" y2="36" />
        <line x1="32" y1="44" x2="32" y2="48" />
      </svg>
    );
  };
  
  export default Warning;