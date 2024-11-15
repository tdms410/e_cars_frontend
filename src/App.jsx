import { useState, createContext } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import CategoryDescription from "./components/product-grid/CategoryDescription";
import ProductGrid from "./components/product-grid/ProductGrid";
import Footer from "./components/Footer";
import Cart from "./components/cart/Cart";
import ProductPage from "./components/product-page/ProductPage";
import BookingProducts from "./components/booking/Booking";

export const Context = createContext();

function App() {
    const [cartCounter, setCartCounter] = useState(0);
    const navigationItems = ["Kia", "Hyundai", "Toyota", "Jetour", "Mitsubishi"];

    return (
        <Context.Provider value={[cartCounter, setCartCounter]}>
            <AnnouncementBar title="" />
            <Header navigationItems={navigationItems} />

            <Router >
                <Routes>
                    <Route path="/booking" element={<BookingProducts />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route
                        path="/"
                        element={
                            <>
                                <CategoryDescription
                                    desc="Experience the latest in fashion trends! Explore a curated collection of stylish shoes, trendy bags, and chic hats for a complete and elevated look. Shop now and define your personal style"
                                    title="Products"
                                />
                                <ProductGrid />
                            </>
                        }
                    />
                    <Route
                        path="/kia"
                        element={
                            <>
                                <CategoryDescription
                                    title="Kia"
                                    desc="Using mostly recycled fibers, we create sustainable shoes that combine comfort with timeless style. Step into our shoes and experience the difference of artisanal craftsmanship and eco-conscious design."
                                />
                                <ProductGrid category="Kia" />
                            </>
                        }
                    />
                    <Route
                        path="/hyundai"
                        element={
                            <>
                                <CategoryDescription
                                    title="Hyundai"
                                    desc="Discover artisanal excellence in every bag. Our skilled artisans pour heart and soul into crafting each piece from concept to stitch, using eco-conscious materials for elegance with a greener conscience"
                                />
                                <ProductGrid category="Hyundai" />
                            </>
                        }
                    />
                    <Route
                        path="/toyota"
                        element={
                            <>
                                <CategoryDescription
                                    title="Toyota"
                                    desc="Our remarkable assortment of hats, where artistry meets functionality. Handpicked materials are thoughtfully sourced, and each hat is crafted to bring you a stunning and versatile accessory. Designed to elevate your style and offer comfort."
                                />
                                <ProductGrid category="Toyota" />
                            </>
                        }
                    />
                    <Route
                    path="/jetour"
                    element={
                        <>
                            <CategoryDescription
                                title="Jetour"
                                desc="Our remarkable assortment of hats, where artistry meets functionality. Handpicked materials are thoughtfully sourced, and each hat is crafted to bring you a stunning and versatile accessory. Designed to elevate your style and offer comfort."
                            />
                            <ProductGrid category="Jetour" />
                        </>
                    }
                     />
                    <Route
                    path="/mitsubishi"
                    element={
                        <>
                            <CategoryDescription
                                title="Mitsubishi"
                                desc="Our remarkable assortment of hats, where artistry meets functionality. Handpicked materials are thoughtfully sourced, and each hat is crafted to bring you a stunning and versatile accessory. Designed to elevate your style and offer comfort."
                            />
                            <ProductGrid category="Mitsubishi" />
                        </>
                    }
                     />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
            </Router>

            <Footer />
        </Context.Provider>
    );
}

export default App;
