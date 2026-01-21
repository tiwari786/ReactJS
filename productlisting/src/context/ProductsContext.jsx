import React, { createContext, useEffect, useState } from 'react';
import { getProductData } from '../api/productApi';

export  const ProductDataContext = createContext()

const ProductsContext = (props) => {

    const [productData, setProductData] = useState([])
    // const [productById, setProductById] = useState()

    const setData = async () => {
        setProductData(await getProductData())
    }

    useEffect(() => {
        setData()
    }, [])

    return (
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
    );
}

export default ProductsContext;