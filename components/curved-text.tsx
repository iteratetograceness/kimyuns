interface CurvedTextProps {
    text: string;
    radius: number;
    centerX: number;
    centerY: number;
    textHeight?: number;
};

const CurvedText = ({ text, radius, centerX, centerY, textHeight = 0 }: CurvedTextProps) => {
    const pathData = `M ${centerX - radius} ${centerY} a ${radius} ${radius} 0 1 0 ${2 * radius} 0`;
    const viewBoxHeight = textHeight + radius; // Adjust this value to control the clipping
  
    return (
      <svg
        viewBox={`${centerX - radius - 10} ${centerY - viewBoxHeight / 2 + radius} ${2 * radius + 20} ${viewBoxHeight - 20}`}
        style={{ overflow: 'visible' }}
      >
        <path id="curved-path" d={pathData} fill="none" />
        <text className="text-md fill-primary">
          <textPath xlinkHref="#curved-path" startOffset="25%">
            {text}
          </textPath>
        </text>
      </svg>
    );
  };
  
  export default CurvedText;  
