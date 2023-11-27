interface Props {
  fill?: string;
}
const ScheduleTimeIcon = ({ fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <g clipPath="url(#clip0_4135_3895)">
        <path
          d="M9.40637 5.36771V9.99734L12.0194 12.7751M17.2453 9.99734C17.2453 14.5997 13.7357 18.3307 9.40637 18.3307C5.07702 18.3307 1.56738 14.5997 1.56738 9.99734C1.56738 5.39497 5.07702 1.66401 9.40637 1.66401C13.7357 1.66401 17.2453 5.39497 17.2453 9.99734Z"
          stroke={fill || "#5F666F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4135_3895">
          <rect
            width="18.8136"
            height="20"
            fill="white"
            transform="translate(0 -0.00265503)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ScheduleTimeIcon;
