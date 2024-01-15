import Image from "next/image";

const AppointmentRequest = () => {
  return (
    <div className="flex flex-col justify-between gap-3">
      {/* top */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg text-[#1B2432]">
          Appointment Request
        </span>
        <button
          type="button"
          className="flex items-center justify-center gap-1"
        >
          <span className="-text--primary-2 font-medium text-sm">View All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M4.08301 12.8334L9.91634 7.00002L4.08301 1.16669"
              stroke="#4FBAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* list */}
      <div className="py-1 bg-white rounded-md">
        <div className="py-2 flex flex-col">
          <div className="py-3 px-5 flex items-center justify-between gap-24 ">
            {/* profile */}
            <div className="flex items-center justify-center gap-5">
              <Image src="/appointment1.png" alt="avt" width={54} height={54} />
              <p className="flex flex-col gap-1">
                <span className="text-[#49505B] font-medium text-base">
                  Savannah Nguyen
                </span>
                <span className="text-[#5F666F] font-normal text-sm">
                  45 Male, 12 April 9:30
                </span>
              </p>
            </div>
            <button
              type="button"
              disabled
              className="bg-[#FF52631A] rounded-md py-2 px-4 -text--secondary-2 font-medium text-xs"
            >
              Declined
            </button>
          </div>
        </div>

        <div className="py-2 flex flex-col">
          <div className="py-3 px-5 flex items-center justify-between gap-24">
            {/* profile */}
            <div className="flex items-center justify-center gap-5">
              <Image src="/appointment2.png" alt="avt" width={54} height={54} />
              <p className="flex flex-col gap-1">
                <span className="text-[#49505B] font-medium text-base">
                  Savannah Nguyen
                </span>
                <span className="text-[#5F666F] font-normal text-sm">
                  45 Male, 12 April 9:30
                </span>
              </p>
            </div>
            <button
              type="button"
              disabled
              className="bg-[#796EFF2A] rounded-md py-2 px-4 -text--primary font-medium text-xs"
            >
              Confirmed
            </button>
          </div>
        </div>

        <div className="py-2 flex flex-col">
          <div className="py-3 px-5 flex items-center justify-between gap-24">
            {/* profile */}
            <div className="flex items-center justify-center gap-5">
              <Image src="/appointment3.png" alt="avt" width={54} height={54} />
              <p className="flex flex-col gap-1">
                <span className="text-[#49505B] font-medium text-base">
                  Savannah Nguyen
                </span>
                <span className="text-[#5F666F] font-normal text-sm">
                  45 Male, 12 April 9:30
                </span>
              </p>
            </div>
            <button
              type="button"
              disabled
              className="bg-[#FF52631A] rounded-md py-2 px-4 -text--secondary-2 font-medium text-xs"
            >
              Declined
            </button>
          </div>
        </div>

        <div className="py-2 flex flex-col">
          <div className="py-3 px-5 flex items-center justify-between gap-24">
            {/* profile */}
            <div className="flex items-center justify-center gap-5">
              <Image src="/appointment4.png" alt="avt" width={54} height={54} />
              <p className="flex flex-col gap-1">
                <span className="text-[#49505B] font-medium text-base">
                  Savannah Nguyen
                </span>
                <span className="text-[#5F666F] font-normal text-sm">
                  45 Male, 12 April 9:30
                </span>
              </p>
            </div>
            <button
              type="button"
              disabled
              className="bg-[#796EFF2A] rounded-md py-2 px-4 -text--primary font-medium text-xs"
            >
              Confirmed
            </button>
          </div>
        </div>

        <div className="py-2 flex flex-col">
          <div className="py-3 px-5 flex items-center justify-between gap-24">
            {/* profile */}
            <div className="flex items-center justify-center gap-5">
              <Image src="/appointment5.png" alt="avt" width={54} height={54} />
              <p className="flex flex-col gap-1">
                <span className="text-[#49505B] font-medium text-base">
                  Savannah Nguyen
                </span>
                <span className="text-[#5F666F] font-normal text-sm">
                  45 Male, 12 April 9:30
                </span>
              </p>
            </div>
            <button
              type="button"
              disabled
              className="bg-[#FF52631A] rounded-md py-2 px-4 -text--secondary-2 font-medium text-xs"
            >
              Declined
            </button>
          </div>
        </div>

        <div className="py-2 flex flex-col">
          <div className="py-3 px-5 flex items-center justify-between gap-24">
            {/* profile */}
            <div className="flex items-center justify-center gap-5">
              <Image src="/appointment6.png" alt="avt" width={54} height={54} />
              <p className="flex flex-col gap-1">
                <span className="text-[#49505B] font-medium text-base">
                  Savannah Nguyen
                </span>
                <span className="text-[#5F666F] font-normal text-sm">
                  45 Male, 12 April 9:30
                </span>
              </p>
            </div>
            <button
              type="button"
              disabled
              className="bg-[#FF52631A] rounded-md py-2 px-4 -text--secondary-2 font-medium text-xs"
            >
              Declined
            </button>
          </div>
        </div>

        <div className="py-2 flex flex-col">
          <div className="py-3 px-5 flex items-center justify-between gap-24">
            {/* profile */}
            <div className="flex items-center justify-center gap-5">
              <Image src="/appointment7.png" alt="avt" width={54} height={54} />
              <p className="flex flex-col gap-1">
                <span className="text-[#49505B] font-medium text-base">
                  Savannah Nguyen
                </span>
                <span className="text-[#5F666F] font-normal text-sm">
                  45 Male, 12 April 9:30
                </span>
              </p>
            </div>

            <div className="flex gap-4">
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M11.1154 25.2583H17.6429C23.0825 25.2583 25.2583 23.0825 25.2583 17.6429V11.1154C25.2583 5.67583 23.0825 3.5 17.6429 3.5H11.1154C5.67583 3.5 3.5 5.67583 3.5 11.1154V17.6429C3.5 23.0825 5.67583 25.2583 11.1154 25.2583Z"
                    stroke="#796EFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.04199 14L12.3437 17.3016L18.9587 10.6983"
                    stroke="#796EFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M17.5002 10.5L10.5003 17.5M10.5004 10.5L17.5004 17.5M9.33366 23.3334H18.667C21.2443 23.3334 23.3337 21.244 23.3337 18.6667V9.33335C23.3337 6.75602 21.2443 4.66669 18.667 4.66669H9.33366C6.75633 4.66669 4.66699 6.75602 4.66699 9.33335V18.6667C4.66699 21.244 6.75633 23.3334 9.33366 23.3334Z"
                    stroke="#FF5263"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequest;
