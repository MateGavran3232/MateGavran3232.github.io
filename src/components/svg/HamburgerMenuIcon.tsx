export const HamburgerMenuIcon = ({
    className,
    width = 50,
    height = 50,
    isOpen = false
  }: {
    className?: string;
    width?: number;
    height?: number;
    isOpen?: boolean;
  }) => {
    console.log(isOpen)
    return (
      <div className={className}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 10 10'
          stroke={!isOpen ? '#eee' : 'black'}
          width={width}
          height={height}
          strokeWidth='.6'
          fill='rgba(0,0,0,0)'
          strokeLinecap='round'>
          <path d='M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7'>
            <animate
              dur='0.2s'
              attributeName='d'
              values='M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7'
              fill='freeze'
              begin={isOpen ? '0s' : 'reverse.end'}
            />
            <animate
              dur='0.2s'
              attributeName='d'
              values='M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7'
              fill='freeze'
              begin={!isOpen ? '0s' : 'reverse.end'}
            />
          </path>
        </svg>
      </div>
    );
  };
  