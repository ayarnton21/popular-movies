import React from "react";
import PlusCircle from "../../../../components/icons/PlusCircle";
import Information from "../../../../components/icons/Information";

const MovieCard = ({ title, imgPath, openModal }) => (
  <div>
    <div className="flex flex-col justify-between w-40 px-4 my-6 mr-4 space-x-2 transition ease-in-out bg-white border border-gray-200 rounded shadow cursor-pointer hover:-translate-y-1 hover:scale-110 md:w-56 ">
      <img
        className="py-4"
        src={`https://image.tmdb.org/t/p/original/${imgPath}`}
        alt="Movie poster"
      />
      <div className="justify-between hidden pb-4 md:flex">
        <PlusCircle size={35} className=" fill-gray-700" />
        <button onClick={openModal}>
          <Information
            type="button"
            onClick={openModal}
            size={35}
            className=" fill-gray-700"
          />
        </button>
      </div>
    </div>
  </div>
);

export default MovieCard;
