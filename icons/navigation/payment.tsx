interface Props {
  fill?: string;
}
const PaymentIcon = ({ fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <path
        d="M4.18038 12.9973C3.76616 12.9973 3.43038 13.3331 3.43038 13.7473C3.43038 14.1616 3.76616 14.4973 4.18038 14.4973V12.9973ZM7.22887 14.4973C7.64308 14.4973 7.97887 14.1616 7.97887 13.7473C7.97887 13.3331 7.64308 12.9973 7.22887 12.9973V14.4973ZM3.30938 3.24734H15.5034V1.74734H3.30938V3.24734ZM16.4953 4.99734V14.9973H17.9953V4.99734H16.4953ZM15.5034 16.7473H3.30938V18.2473H15.5034V16.7473ZM2.31738 14.9973V4.99735H0.817383V14.9973H2.31738ZM3.30938 16.7473C3.14181 16.7473 2.91205 16.6508 2.69295 16.3363C2.47566 16.0245 2.31738 15.5534 2.31738 14.9973H0.817383C0.817383 15.822 1.04906 16.6009 1.46225 17.1939C1.87364 17.7843 2.51487 18.2473 3.30938 18.2473V16.7473ZM16.4953 14.9973C16.4953 15.5534 16.3371 16.0245 16.1198 16.3363C15.9007 16.6508 15.6709 16.7473 15.5034 16.7473V18.2473C16.2979 18.2473 16.9391 17.7843 17.3505 17.1939C17.7637 16.6009 17.9953 15.822 17.9953 14.9973H16.4953ZM15.5034 3.24734C15.6709 3.24734 15.9007 3.34392 16.1198 3.65835C16.3371 3.97019 16.4953 4.44127 16.4953 4.99734H17.9953C17.9953 4.17271 17.7637 3.39379 17.3505 2.8008C16.9391 2.21042 16.2979 1.74734 15.5034 1.74734V3.24734ZM3.30938 1.74734C2.51487 1.74734 1.87364 2.21042 1.46225 2.8008C1.04906 3.39379 0.817383 4.17271 0.817383 4.99735H2.31738C2.31738 4.44127 2.47566 3.97019 2.69295 3.65835C2.91205 3.34392 3.14181 3.24734 3.30938 3.24734V1.74734ZM1.56738 8.24734H17.2453V6.74734H1.56738V8.24734ZM4.18038 14.4973H7.22887V12.9973H4.18038V14.4973Z"
        fill={fill || "#5F666F"}
      />
    </svg>
  );
};

export default PaymentIcon;
