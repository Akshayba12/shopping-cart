import React from 'react';
import { useError } from '../../context/errorContext';

function Error() {
  const { error, removeError } = useError();

  console.log('error', JSON.stringify(error));

  return (
    <>
      {Object.keys(error).map((x, i) => (
        <div
          className="fixed md:w-1/2 lg:2/3 left-0 z-10"
          style={{
            bottom: i * 85,
          }}
        >

          <div
            className="m-10 bg-red-100 rounded-b text-red-900 shadow-md"
            role="alert"
          >
            <div className="w-full bg-red-200 h-2.5 py-0.5">
              <div
                className="roll"
              />
              <p className="sr-only">{ setTimeout(() => removeError(x), 10000)}</p>
            </div>

            <div className="flex mx-3 my-4">
              <div className="py-1">

                <svg
                  className="fill-current h-6 w-6 text-red-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold py-1">
                  {error[x].title}
                </p>
                <p className="text-sm">
                  {error[x].message}
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeError(x)}
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />

                </svg>
              </button>

            </div>
          </div>
        </div>
      ))}

    </>

  );
}

export default Error;
