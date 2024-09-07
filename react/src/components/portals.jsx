import React, { useState } from "react";
import { createPortal } from "react-dom";

const portals = () => {
  const [showModal, setShowModal] = useState(false);
  const modal = document.getElementById("modal");
  return (
    <>
      <div className="w-full h-[100vh] bg-lime-300 flex justify-center flex-col items-center pt-10">
        <button
          onClick={() => setShowModal(true)}
          className="bg-white p-4 rounded-full"
        >
          Get in touch
        </button>
      </div>

      {showModal &&
        createPortal(
          <div className="fixed bottom-0 top-0 left-0 right-0 	 z-20">
            <div className="fixed top-[35%] left-[10%] right-[10%] flex flex-col justify-center bg-white p-10  z-20">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                eligendi obcaecati dolorem quasi reiciendis, qui sit soluta eos
                numquam praesentium debitis natus blanditiis id quos deleniti,
                dolor aut at iste?
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem laudantium minus, recusandae quaerat ipsam
                incidunt, harum, reiciendis et iure animi repellendus hic
                dolorem est nemo ratione suscipit autem ut quia!
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-600 p-3 text-white  rounded-2xl mt-4"
              >
                Close
              </button>
            </div>
          </div>,
          modal
        )}
    </>
  );
};

export default portals;
