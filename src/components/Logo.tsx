interface Props {
  size: number;
}

export const Logo = ({ size }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={size}
      width={size}
      fill='currentColor'
      viewBox='0 0 50 50'
    >
      <path d='M22.5 44V34.25L15.05 41.7L12.9 39.6L22.5 30V25.5H18L8.6 34.9L6.4 32.85L13.75 25.5H4V22.5H13.75L6.25 15L8.4 12.85L18 22.5H22.5V17.95L13.1 8.55L15.2 6.35L22.5 13.7V4H25.5V13.7L33 6.2L35.1 8.35L25.5 17.95V22.5H30.05L39.5 13.05L41.65 15.15L34.3 22.5H44V25.5H34.3L41.7 32.95L39.65 35.1L30.05 25.5H25.5V30L35.1 39.65L33.05 41.8L25.5 34.25V44Z'></path>
    </svg>
  );
};
