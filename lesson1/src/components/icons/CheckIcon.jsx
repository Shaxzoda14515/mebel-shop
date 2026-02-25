const CheckIcon = ({ size = 20, color = "#FFF", className = "" }) => {
    return (
      <svg
        fill={color}
        width={size}
        height={size}
        viewBox="0 0 335.765 335.765"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
      </svg>
    );
  };
  
  export default CheckIcon;