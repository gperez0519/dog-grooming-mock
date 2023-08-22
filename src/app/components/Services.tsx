import React from "react";

const Services = () => {
  return (
    <>
      <div className="text-4xl font-bold p-5 text-center">Our Services</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="service-one sm:grid-cols-5">
          <div className="break-words bg-indigo-400 font-bold text-white text-center p-2 rounded-t-md">
            Puppers Basic
          </div>
          <div className="border-4 border-indigo-400 p-5">
            <div className="flex justify-center">
              <ul className="list-none list-inside">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-green-700 inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Bath
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline text-red-700 mr-1 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Nail Clip
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline text-red-700 mr-1 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Basic Shampoo
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline text-red-700 mr-1 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Blow Dry
                </li>
              </ul>
            </div>
            <div className="text-4xl font-bold text-center mt-3 p-1">
              <h1>$20</h1>
            </div>
          </div>
        </div>
        <div className="service-one">
          <div className="break-words bg-green-400 font-bold text-white text-center p-2 rounded-t-md">
            Puppers Advanced
          </div>
          <div className="border-4 border-green-400 p-5">
            <div className="flex justify-center">
              <ul className="list-none list-inside">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-green-700 inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Bath
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-green-700 inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Nail Clip
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline text-red-700 mr-1 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Basic Shampoo
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline text-red-700 mr-1 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Blow Dry
                </li>
              </ul>
            </div>
            <div className="text-4xl font-bold text-center mt-3 p-1">
              <h1>$40</h1>
            </div>
          </div>
        </div>
        <div className="service-one">
          <div className="break-words bg-yellow-400 font-bold text-white text-center p-2 rounded-t-md">
            Puppers Premium
          </div>
          <div className="border-4 border-yellow-400 p-5">
            <div className="flex justify-center">
              <ul className="list-none list-inside">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-green-700 inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Bath
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-green-700 inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Nail Clip
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-green-700 inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Basic Shampoo
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 text-green-700 inline h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Blow Dry
                </li>
              </ul>
            </div>
            <div className="text-4xl font-bold text-center mt-3 p-1">
              <h1>$60</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
