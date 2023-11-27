interface Props {
  fill?: string;
}
const AppointmentIcon = ({ fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        d="M12.0523 2.49734V5.83068M6.76099 2.49734V5.83068M2.35156 9.16401H16.4617M16.4617 9.16401V15.8307C16.4617 16.7512 15.6721 17.4973 14.698 17.4973H4.11533C3.14123 17.4973 2.35156 16.7512 2.35156 15.8307V5.83068C2.35156 4.9102 3.14123 4.16401 4.11533 4.16401H14.698C15.6721 4.16401 16.4617 4.9102 16.4617 5.83068V9.16401Z"
        stroke={fill || "#5F666F"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AppointmentIcon;
