/* eslint-disable react/prop-types */

const Questions = ({ data }) => {
  const que = data.que;
  // const ans = data.ans;
  const lines = data?.ans?.split(". ");
  return (
    <div className="relative text-start w-full px-0 sm:rounded-lg">
      <div className="mx-auto">
        <div className="mx-auto grid max-w-4xl">
          {/* <hr className="w-full my-8 gradient-border !border-x-0 !border-b-0" /> */}
          <details className="group gradient-border !border-x-0 !border-b-0 last:!border-b py-6 md:px-2">
            <summary className="flex cursor-pointer md:gap-3 list-none items-center justify-between font-medium">
              <span className="text-gray-200 font-contrax">{que}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  color="#ffffff"
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-gray-400 font-readex text-sm">
              {lines.map((line, i) => (
                <span key={`${"data"}+${i}`}>{line}</span>
              ))}
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Questions;
