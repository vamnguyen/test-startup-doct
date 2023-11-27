interface Props {
  fill?: string;
}
const PatientIcon = ({ fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <g clipPath="url(#clip0_4135_3890)">
        <path
          d="M16.4617 18.3307V16.4788C16.4617 14.4333 14.8824 12.7751 12.9342 12.7751H5.8791C3.9309 12.7751 2.35156 14.4333 2.35156 16.4788V18.3307M12.9342 5.36771C12.9342 7.41321 11.3549 9.07142 9.40665 9.07142C7.45844 9.07142 5.8791 7.41321 5.8791 5.36771C5.8791 3.32222 7.45844 1.66401 9.40665 1.66401C11.3549 1.66401 12.9342 3.32222 12.9342 5.36771Z"
          stroke={fill || "#5F666F"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4135_3890">
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

export default PatientIcon;
