interface Props {
  fill?: string;
}

const DashboardIcon = ({ fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 2H9.5V9.5H2V2Z"
        stroke={fill || "#5F666F"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14.5H9.5V22H2V14.5Z"
        stroke={fill || "#5F666F"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 2H22V9.5H14.5V2Z"
        stroke={fill || "#5F666F"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 14.5H22V22H14.5V14.5Z"
        stroke={fill || "#5F666F"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
