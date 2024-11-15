import banner from "/bannervoiture.png"

function CategoryDescription({ title, desc }) {
    return (
        <div className="light-gray-bg-custom">
            <div className="p-4  max-w-screen-2xl mx-auto">
                <div className=" mx-auto p-10 py-§0">
                    <img src={banner} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
}

export default CategoryDescription;
