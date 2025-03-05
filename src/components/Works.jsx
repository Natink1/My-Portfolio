import React from "react";

const Works = () => {
  return (
    <>
    <div id="Works" className="hidden lg:!flex flex-col items-center p-10 lg:!p-36">
      <h1 className="text-white text-5xl font-bold mb-8">Works</h1>
      <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-8">
        <div
          className="rounded-lg shadow-md flex items-center justify-center text-center 
         lg:!row-span-2 relative overflow-hidden transition transform duration-200 hover:scale-105"
        >
          <img
            src="src\images\num1.png"
            alt="Content 1"
            className="w-1/4 h-1/4 md:!w-full md:!h-full lg:!w-full lg:!h-full object-cover rounded-lg"
          />
        </div>

        <div
          className="rounded-lg shadow-md flex items-center justify-center text-center 
                 relative overflow-hidden transition transform duration-200 hover:scale-105"
        >
          <img
            src="src\images\Gena.jpg"
            alt="Content 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div
          className="rounded-lg shadow-md flex items-center justify-center text-center 
                 relative overflow-hidden transition transform duration-200 hover:scale-105"
        >
          <img
            src="src\images\house.jpg"
            alt="Content 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div
          className="rounded-lg shadow-md flex items-center justify-center text-center 
                 col-span-2 relative overflow-hidden transition transform duration-200 hover:scale-105"
        >
          <img
            src="https://via.placeholder.com/600x200"
            alt="Content 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div
          className="rounded-lg shadow-md flex items-center justify-center text-center 
                 relative overflow-hidden transition transform duration-200 hover:scale-105"
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Content 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>


<div id="Works" className="lg:!hidden flex flex-col items-center p-10">
<h1 className="text-white text-5xl font-bold mb-8">Works</h1>
<div className="grid grid-cols-1 gap-3">
  <div
    className="rounded-lg shadow-md flex items-center justify-center text-center 
           relative overflow-hidden transition transform duration-200 hover:scale-105"
  >
    <img
      src="src\images\num1.png"
      alt="Content 1"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  <div
    className="rounded-lg shadow-md flex items-center justify-center text-center 
           relative overflow-hidden transition transform duration-200 hover:scale-105"
  >
    <img
      src="src\images\Gena.jpg"
      alt="Content 2"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  <div
    className="rounded-lg shadow-md flex items-center justify-center text-center 
           relative overflow-hidden transition transform duration-200 hover:scale-105"
  >
    <img
      src="src\images\house.jpg"
      alt="Content 3"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  <div
    className="rounded-lg shadow-md flex items-center justify-center text-center 
           relative overflow-hidden transition transform duration-200 hover:scale-105"
  >
    <img
      src="https://via.placeholder.com/600x200"
      alt="Content 4"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  <div
    className="rounded-lg shadow-md flex items-center justify-center text-center 
           relative overflow-hidden transition transform duration-200 hover:scale-105"
  >
    <img
      src="https://via.placeholder.com/300x200"
      alt="Content 5"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>
</div>

</>
  );
};

export default Works;
