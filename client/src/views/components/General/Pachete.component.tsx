import React from "react";

export default function Pachete() {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center mt-20">
        <div className="max-w-sm bg-black border border-2 border-white rounded-lg shadow">
          <img
            className="rounded-t-lg border-b-2"
            src="https://the-club.com/wp-content/uploads/The-Club-Band-2.jpg  "
            alt="pachet vip"
          />
          <div className="p-5">
            <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Pachet VIP
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-black border border-2 border-white rounded-lg shadow">
          <img
            className="rounded-t-lg border-b-2"
            src="https://the-club.com/wp-content/uploads/The-Club-Band-2.jpg  "
            alt="pachet vip"
          />
          <div className="p-5">
            <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Pachet Standard
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
