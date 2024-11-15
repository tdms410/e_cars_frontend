import React, { useState } from 'react';
import TitleMessage from './TitleMessage';

const Booking = () => {
    const [searchModalOpen, setSearchModalOpen] = useState(false)

    return (
        <div className="max-w-screen-2xl mx-auto p-9 flex-col pt-24">
            <TitleMessage />

            {/* {cartItems.length > 0 ? (
                <>
                    <CartTable
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />

                    <div className="flex flex-col items-end justify-between text-right w-11/12 md:w-4/5 mx-auto">
                        <TotalPrice cartItems={cartItems} />
                        <CheckOutButton />
                    </div>
                </>
            ) : (
            )} */}
                <p className="text-center mb-32">
                    Aucune Réservations. Essayez Réserver quelques un..
                </p>
        </div>
    );
}

export default Booking;
