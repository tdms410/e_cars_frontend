import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../utils/Transition";

function BookingSearch({ id, searchId, modalOpen, setModalOpen }) {
  const modalContent = useRef(null);
  const searchInput = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg py-4"
        >
          {/* Search form */}
          <h1 className="text-3xl text-center text-slate-800 font-bold mb-6">
            Informations
          </h1>
          <form className="border-b border-slate-200">
            <div className="relative">
              <div className="max-w-sm mx-auto px-4">
                <div className="space-y-4">
                  <div>
                    <label htmlFor={searchId} className="sr-only">
                      Search
                    </label>
                    <input
                      id={searchId}
                      className="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none  pr-4"
                      type="hidden"
                      placeholder="Search Anything…"
                      ref={searchInput}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-left text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Nom<span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="w-full border focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-left text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Prenom<span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="w-full border focus:ring-red-700 placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-left text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Telephone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="w-full border focus:ring-red-700 placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-left text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      E-mail <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="w-full border focus:ring-red-700 placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <button
                    type=""
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mb-8 w-48 mt-8"
                    // onClick={() => handleCheckOut()}
                  >
                    Validez
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Transition>
    </>
  );
}

export default BookingSearch;
