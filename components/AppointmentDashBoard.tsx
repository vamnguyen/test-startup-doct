import AppointmentRequest from "@/components/AppointmentRequest";
import { PatientIcon } from "@/icons";
import { Calendar } from "antd";
import Image from "next/image";

const AppointmentDashBoard = () => {
  return (
    <section className="flex gap-10">
      {/* left section */}
      <AppointmentRequest />

      {/* middle section */}
      <div className=" flex flex-col gap-20">
        {/* patients stats*/}
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-[#1B2432]">
              Patients
            </span>
            <button
              type="button"
              className="flex items-center justify-center gap-1 bg-[#FFF] py-1 px-1 rounded-md"
            >
              <span className="text-[#8D9198] font-medium text-sm">2020</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1.16699 4.08334L7.00033 9.91667L12.8337 4.08334"
                  stroke="#8D9198"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="bg-white rounded-md py-9 px-5 flex flex-col gap-9">
            {/* new patient */}
            <div className="flex gap-7 items-center">
              <div className="flex items-center gap-5">
                <PatientIcon fill="#23A9F9" />
                <p className="flex flex-col gap-1">
                  <span className="text-[#1B2432] font-semibold text-xl">
                    24.4k
                  </span>
                  <span className="text-[#5F666F] font-normal text-sm">
                    New Patient
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                >
                  <path
                    d="M0.999023 6.49982L4.87402 2.62482L6.99902 4.74982L10.999 0.749817"
                    stroke="#796EFF"
                  />
                  <path d="M8.25 0.749817H11V3.49982" stroke="#796EFF" />
                </svg>
                <span className="-text--primary font-medium text-sm">15%</span>
              </div>
            </div>
            {/* old patient */}
            <div className="flex gap-7 items-center">
              <div className="flex items-center gap-5">
                <PatientIcon fill="#FFA900" />
                <p className="flex flex-col gap-1">
                  <span className="text-[#1B2432] font-semibold text-xl">
                    166.3k
                  </span>
                  <span className="text-[#5F666F] font-normal text-sm">
                    Old Patient
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                >
                  <path
                    d="M0.999023 6.49982L4.87402 2.62482L6.99902 4.74982L10.999 0.749817"
                    stroke="#796EFF"
                  />
                  <path d="M8.25 0.749817H11V3.49982" stroke="#796EFF" />
                </svg>
                <span className="-text--primary font-medium text-sm">15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* gender stats */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-[#1B2432]">Gender</span>
            <button
              type="button"
              className="flex items-center justify-center gap-1 bg-[#FFF] py-1 px-1 rounded-md"
            >
              <span className="text-[#8D9198] font-medium text-sm">2020</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1.16699 4.08334L7.00033 9.91667L12.8337 4.08334"
                  stroke="#8D9198"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="py-7 px-6 flex flex-col items-center justify-center gap-5 bg-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="118"
              height="118"
              viewBox="0 0 118 118"
              fill="none"
            >
              <path
                d="M118 59C118 91.5848 91.5848 118 59 118C26.4152 118 0 91.5848 0 59C0 26.4152 26.4152 0 59 0C91.5848 0 118 26.4152 118 59ZM19.7459 59C19.7459 80.6794 37.3206 98.2541 59 98.2541C80.6794 98.2541 98.2541 80.6794 98.2541 59C98.2541 37.3206 80.6794 19.7459 59 19.7459C37.3206 19.7459 19.7459 37.3206 19.7459 59Z"
                fill="#767C84"
              />
              <path
                d="M116.337 45.0889C118.496 53.9911 118.554 63.274 116.504 72.2022C114.454 81.1304 110.354 89.4586 104.527 96.5272C98.7004 103.596 91.3079 109.211 82.9351 112.927C74.5623 116.643 65.4392 118.359 56.2884 117.938L57.1935 98.2647C63.2898 98.5452 69.3677 97.4023 74.9458 94.9265C80.5238 92.4507 85.4487 88.7101 89.3304 84.0009C93.2121 79.2918 95.944 73.7434 97.3096 67.7954C98.6751 61.8473 98.637 55.663 97.1981 49.7323L116.337 45.0889Z"
                fill="#23A9F9"
              />
              <path
                d="M61.9696 117.925C51.422 118.457 40.925 116.147 31.5743 111.238C22.2237 106.329 14.3621 98.9999 8.81026 90.016C3.25838 81.032 0.219736 70.7225 0.011473 60.1635C-0.19679 49.6045 2.43297 39.1832 7.62626 29.9873C12.8196 20.7913 20.386 13.158 29.5358 7.88385C38.6856 2.60974 49.0834 -0.111722 59.6438 0.00351223C70.2042 0.118746 80.54 3.06645 89.5726 8.53896C98.6051 14.0115 106.003 21.8081 110.995 31.1152L93.6392 40.4229C90.3139 34.2225 85.3852 29.0283 79.3677 25.3825C73.3501 21.7367 66.4643 19.7729 59.4289 19.6961C52.3935 19.6193 45.4664 21.4324 39.3707 24.946C33.2751 28.4597 28.2342 33.5451 24.7744 39.6715C21.3146 45.7979 19.5627 52.7407 19.7014 59.7751C19.8401 66.8096 21.8645 73.6779 25.5632 79.6631C29.2619 85.6483 34.4993 90.531 40.7288 93.8015C46.9583 97.0721 53.9515 98.6106 60.9784 98.2564L61.9696 117.925Z"
                fill="#FFA900"
              />
              <path
                d="M17.2807 17.2807C25.901 8.66045 36.9798 2.92211 48.9941 0.854642C61.0084 -1.21282 73.3682 0.49211 84.3741 5.73503C95.3799 10.9779 104.492 19.5014 110.456 30.1335C116.421 40.7656 118.945 52.9843 117.683 65.1097L98.0039 63.0608C98.843 55.0016 97.165 46.8804 93.2006 39.8137C89.2363 32.747 83.1802 27.0818 75.865 23.5971C68.5499 20.1123 60.3349 18.9791 52.3495 20.3533C44.3641 21.7274 37.0005 25.5415 31.271 31.271L17.2807 17.2807Z"
                fill="#796EFF"
              />
            </svg>

            <div className="flex justify-between gap-8">
              <div className="flex gap-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="absolute -left-[6px] -translate-x-full top-2"
                >
                  <circle cx="4" cy="4" r="4" fill="#FFA900" />
                </svg>
                <p className="flex flex-col gap-[2px]">
                  <span className="text-[#1B2432] font-semibold text-sm">
                    Male
                  </span>
                  <span className="text-[#8D9198] font-medium text-xs">
                    45%
                  </span>
                </p>
              </div>

              <div className="flex gap-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="absolute -left-[6px] -translate-x-full top-2"
                >
                  <circle cx="4" cy="4" r="4" fill="#796EFF" />
                </svg>
                <p className="flex flex-col gap-[2px]">
                  <span className="text-[#1B2432] font-semibold text-sm">
                    Female
                  </span>
                  <span className="text-[#8D9198] font-medium text-xs">
                    30%
                  </span>
                </p>
              </div>

              <div className="flex gap-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  className="absolute -left-[6px] -translate-x-full top-2"
                >
                  <circle cx="4" cy="4" r="4" fill="#23A9F9" />
                </svg>
                <p className="flex flex-col gap-[2px]">
                  <span className="text-[#1B2432] font-semibold text-sm">
                    Child
                  </span>
                  <span className="text-[#8D9198] font-medium text-xs">
                    25%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="flex flex-col gap-4">
        {/* title */}
        <p className="font-semibold text-lg text-[#1B2432]">
          Appointment Request
        </p>

        {/* list and calendar */}
        <div className="pt-3 flex flex-col gap-1 bg-white rounded-md">
          {/* list */}
          <div>
            <div className="py-3 px-5 flex items-center justify-between gap-24 bg-[#E9F6FE]">
              {/* profile */}
              <div className="flex items-center justify-center gap-5">
                <Image
                  src="/appointment2.png"
                  alt="avt"
                  width={54}
                  height={54}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-[#49505B] font-medium text-base">
                    Savannah Nguyen
                  </span>
                  <span className="text-[#5F666F] font-normal text-sm">
                    Clinic Consulting
                  </span>
                </p>
              </div>
              <span className="-text--primary font-normal text-xs">
                Ongoing
              </span>
            </div>
            <div className="py-3 px-5 flex items-center justify-between gap-24">
              {/* profile */}
              <div className="flex items-center justify-center gap-5">
                <Image
                  src="/appointment2.png"
                  alt="avt"
                  width={54}
                  height={54}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-[#49505B] font-medium text-base">
                    Savannah Nguyen
                  </span>
                  <span className="text-[#5F666F] font-normal text-sm">
                    Clinic Consulting
                  </span>
                </p>
              </div>
              <span className="text[#767C84] font-normal text-xs">10:25</span>
            </div>
            <div className="py-3 px-5 flex items-center justify-between gap-24">
              {/* profile */}
              <div className="flex items-center justify-center gap-5">
                <Image
                  src="/appointment2.png"
                  alt="avt"
                  width={54}
                  height={54}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-[#49505B] font-medium text-base">
                    Savannah Nguyen
                  </span>
                  <span className="text-[#5F666F] font-normal text-sm">
                    Clinic Consulting
                  </span>
                </p>
              </div>
              <span className="text[#767C84] font-normal text-xs">10:25</span>
            </div>
            <div className="py-3 px-5 flex items-center justify-between gap-24">
              {/* profile */}
              <div className="flex items-center justify-center gap-5">
                <Image
                  src="/appointment2.png"
                  alt="avt"
                  width={54}
                  height={54}
                />
                <p className="flex flex-col gap-1">
                  <span className="text-[#49505B] font-medium text-base">
                    Savannah Nguyen
                  </span>
                  <span className="text-[#5F666F] font-normal text-sm">
                    Clinic Consulting
                  </span>
                </p>
              </div>
              <span className="text[#767C84] font-normal text-xs">10:25</span>
            </div>
          </div>
          {/* calendar */}
          <Calendar />
        </div>
      </div>
    </section>
  );
};

export default AppointmentDashBoard;
