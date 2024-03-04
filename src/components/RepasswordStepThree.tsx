import React from "react";

export const RepasswordStepThree = () => {
  return (
    <form className="flex flex-col w-1/3 h-96 justify-center items-center my-8 gap-8">
      <p className="text-black font-semibold text-3xl">Шинэ нууц үг зохиох</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Нууц үг</label>
          <input
            type="text"
            placeholder=""
            className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Нууц үг давтах</label>
          <input
            type="text"
            placeholder=""
            className="bg-gray-200 w-80 h-12 rounded-lg text-black px-4"
          />
        </div>
      </div>
      <button className="bg-green-500 rounded-lg w-80 h-12">
        Үргэлжлүүлэх
      </button>
    </form>
  );
};