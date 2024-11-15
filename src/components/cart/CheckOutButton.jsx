import React, {useState} from "react";
import BookingModal from "../booking/BookingModal.jsx"


function CheckOutButton() {
    //   
  const [searchModalOpen, setSearchModalOpen] = useState(false)
    // Handle checkout
    const handleCheckOut = () => {
        alert("success");
    };
    

    return (
        <>
        <button
            type=""
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mb-8 w-48 mt-8"
            // onClick={() => handleCheckOut()}
            onClick={(e) => { e.stopPropagation(); setSearchModalOpen(true); }}
        >
            soumettre 
        </button>
        <BookingModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
        </>
    );
}

export default CheckOutButton;
