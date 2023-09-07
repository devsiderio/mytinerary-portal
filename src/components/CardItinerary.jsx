import { useState } from "react";

export default function CardCity({
  src,
  alt,
  text,
  user,
  tags,
  duration,
  price,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col border border-gray-300 shadow-md bg-slate-100 p-2 mt-4 rounded-xl w-full md:w-4/6 lg:w-3/6">
      <div className="flex flex-col items-center p-4 rounded-lg ">
        <p className="text-2xl mb-4 font-semibold text-indigo-600">{text}</p>
        <img src={src} alt={alt} className="rounded-lg" />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-around md:flex-grow mx-4">
          <div className="flex flex-col items-center">
            <img
              src={user.photo}
              alt={user.name}
              className="w-3/5 md:w-4/5 lg:w-full"
            />
            <p className="text-xl mt-1 font-semibold text-indigo-600">
              {user.name}
            </p>
          </div>
          <p className="flex flex-col items-center ">
            <div className="text-xl font-semibold text-indigo-600">Tags:</div>
            <div className="flex flex-col items-center">
              {tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </p>
        </div>
        <div className="flex justify-around md:flex-grow mt-1">
          <p className="flex flex-col items-center">
            <div className="text-xl font-semibold text-indigo-600">
              Duration:
            </div>
            <div>{Math.floor(duration / 60)} hour(s)</div>
          </p>
          <p className="flex flex-col items-center">
            <div className="text-xl font-semibold text-indigo-600">Price:</div>
            <div>{Math.ceil(price / 40)} pound(s)</div>
          </p>
        </div>
      </div>
      <span
        onClick={() => setShow(!show)}
        className="shadow bg-purple-400 hover:bg-purple-300 text-white hover:text-purple-600 focus:shadow-outline focus:outline-none font-bold my-4 py-2 px-4 w-[200px] rounded cursor-pointer text-center m-auto"
      >
        {show ? <p>Hide activities &uarr;</p> : <p>View activities &darr;</p>}
      </span>
      {show && (
        <p className="flex justify-center text-xl font-semibold text-indigo-600 mb-3">
          Activities under construction 🏞️✨
        </p>
      )}
    </div>
  );
}
