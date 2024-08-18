import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="pt-8">
        <div className="grid grid-cols-1 gap4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src="chess.png" className="max-w-96" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">
              Play chess online on the #2 Site!
            </h1>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Play Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
