import React, { useContext } from 'react';
import { ProductDataContext } from '../context/ProductsContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const productData = useContext(ProductDataContext)

    const { id } = useParams()
    // console.log(id)

    let selectData = "Loading..."

    if (productData.length > 0) {
        selectData = productData.find((elem) => id == elem.id)
        // console.log(selectData)
    }



    return (
        <div className="min-h-screen bg-slate-50 py-10 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

                {/* Left - Image */}
                <div className="flex items-center justify-center">
                    <img
                        src={selectData.image}
                        alt={selectData.title}
                        className="h-80 object-contain"
                    />
                </div>

                {/* Right - Details */}
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                        {selectData.title}
                    </h1>

                    <p className="text-xl text-green-600 font-bold mb-2">
                        ₹ {selectData.price}
                    </p>

                    <div className="flex items-center text-yellow-500 mb-4">
                        ⭐ {selectData.rating.rate}
                        <span className="text-gray-500 text-sm ml-2">
                            ({selectData.rating.count} reviews)
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {selectData.description}
                    </p>

                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                            Add to Cart
                        </button>
                        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
