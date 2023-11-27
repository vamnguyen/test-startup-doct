interface Props {
  fill?: string;
}
const MessageIcon = ({ fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        d="M2.00288 4.61044L8.17459 10.937C8.85488 11.6344 9.95785 11.6344 10.6381 10.937L16.8099 4.61044M2.43838 16.664H16.3744C16.8554 16.664 17.2453 16.2643 17.2453 15.7712V5.05687C17.2453 4.56375 16.8554 4.16401 16.3744 4.16401H2.43838C1.95734 4.16401 1.56738 4.56376 1.56738 5.05687V15.7712C1.56738 16.2643 1.95734 16.664 2.43838 16.664Z"
        stroke={fill || "#5F666F"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessageIcon;
