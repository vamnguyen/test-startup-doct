const Stats = () => {
  return (
    <section className="flex items-center justify-between gap-5">
      {/* card appointments */}
      <div className="flex items-center gap-5 py-7 pl-5 pr-[75px] -bg--primary rounded-xl">
        <span className="flex items-center justify-center p-4 rounded-[100px] bg-[#ffffff2e]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M17.9375 3.5V8.16667M10.0625 3.5V8.16667M3.5 12.8333H24.5M24.5 12.8333V22.1667C24.5 23.4553 23.3247 24.5 21.875 24.5H6.125C4.67525 24.5 3.5 23.4553 3.5 22.1667V8.16667C3.5 6.878 4.67525 5.83333 6.125 5.83333H21.875C23.3247 5.83333 24.5 6.878 24.5 8.16667V12.8333Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="flex flex-col">
          <span className="text-[#FFF] font-bold text-2xl">24.4k</span>
          <span className="text-[#E5E5E5] font-semibold text-sm">
            Appointments
          </span>
        </p>
      </div>
      {/* card patient */}
      <div className="flex items-center gap-5 py-7 pl-5 pr-[80px] -bg--secondary-2 rounded-xl">
        <span className="flex items-center justify-center p-4 rounded-[100px] bg-[#ffffff2e]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M24.5 25.6667V23.0741C24.5 20.2104 22.1495 17.8889 19.25 17.8889H8.75C5.85051 17.8889 3.5 20.2104 3.5 23.0741V25.6667M19.25 7.51852C19.25 10.3822 16.8995 12.7037 14 12.7037C11.1005 12.7037 8.75 10.3822 8.75 7.51852C8.75 4.65482 11.1005 2.33333 14 2.33333C16.8995 2.33333 19.25 4.65482 19.25 7.51852Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="flex flex-col">
          <span className="text-[#FFF] font-bold text-2xl">166.3k</span>
          <span className="text-[#E5E5E5] font-semibold text-sm">
            Total Patient
          </span>
        </p>
      </div>
      {/* card clinic consulting */}
      <div className="flex items-center gap-5 py-7 pl-5 pr-[80px] -bg--secondary rounded-xl">
        <span className="flex items-center justify-center p-4 rounded-[100px] bg-[#ffffff2e]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M18.2819 24H5.42857C4.63959 24 4 23.3604 4 22.5714V11.1174C4 10.3284 4.63959 9.68882 5.42857 9.68882H8.28571V5.42857C8.28571 4.63959 8.9253 4 9.71428 4H18.2857C19.0747 4 19.7143 4.63959 19.7143 5.42857V9.71002L22.5629 9.69307C23.3519 9.68841 23.9953 10.3242 24 11.1132V22.5496C24 23.3357 23.3648 23.9741 22.5787 23.9781L19.7143 23.9927V24H18.2894C18.2869 24 18.2844 24 18.2819 24ZM19.7143 22.5641L22.5714 22.5496V11.1216L19.7143 11.1386V22.5641ZM18.2839 22.5714H18.2857V5.42857H9.71428V22.5714H18.2839L19.7143 22.5641L18.2839 22.5714ZM8.28571 22.5714V11.1174H5.42857V22.5714H8.28571Z"
              fill="white"
            />
            <path
              d="M14 7V13M11 10L17 10"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="flex flex-col">
          <span className="text-[#FFF] font-bold text-2xl">53.5k</span>
          <span className="text-[#E5E5E5] font-semibold text-sm">
            Clinic Consulting
          </span>
        </p>
      </div>
      {/* card video consulting */}
      <div className="flex items-center gap-5 py-7 pl-5 pr-[80px] -bg--primary-2 rounded-xl">
        <span className="flex items-center justify-center p-4 rounded-[100px] bg-[#ffffff2e]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M19.3333 9.38462L26 6.30769V21.6923L19.3333 18.6154M3.33333 24H18C18.7364 24 19.3333 23.3112 19.3333 22.4615V5.53846C19.3333 4.68879 18.7364 4 18 4H3.33333C2.59695 4 2 4.68879 2 5.53846V22.4615C2 23.3112 2.59695 24 3.33333 24Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="flex flex-col">
          <span className="text-[#FFF] font-bold text-2xl">28.0k</span>
          <span className="text-[#E5E5E5] font-semibold text-sm">
            Video Consulting
          </span>
        </p>
      </div>
    </section>
  );
};

export default Stats;
