import React from "react";
import ReactModal from "react-modal";
import Button from "../Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    padding: "0",
  },
};
const Modal = ({ onClose, selectedMovie, isOpen }) => (
  <ReactModal
    className="absolute bottom-auto right-auto w-full bg-white shadow top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:w-auto md:h-auto"
    isOpen={isOpen}
  >
    <div className="flex flex-col">
      <div className="p-4 bg-blue-400 ">
        <h1 className="text-xl font-semibold text-white ">
          {selectedMovie.original_title}
        </h1>
      </div>
      <div className="p-4 text-gray-600">
        <p>{selectedMovie.overview}</p>
        <p className="pt-10 font-semibold">
          Release date: {selectedMovie.release_date}
        </p>
      </div>
      <div className="flex justify-between p-4 border-t">
        <Button outline text="Close" onClick={onClose} />
        <Button text={"Add to watchlist"} />
      </div>
    </div>
  </ReactModal>
);

export default Modal;
