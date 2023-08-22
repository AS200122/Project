import cls from "./catalog.module.css"
import { useSelector } from "react-redux"
import { productSelector } from "@/store/reducers/pruduct/product.slice"
import Product from "@/components/product/product"
import Link from "next/link"
import { fakeData } from "@/components/delete" 
import { useState } from "react"

export default function Catalog() {
    const [productsState, setProductState] = useState(fakeData)
  ///  var productsState = fakeData
    const hundlerDelete = (id) => {
     const y = productsState.filter((item) => {
            return item.id !== id
         })
         setProductState(y)
    }
    ///useSelector(productSelector)
    console.log(productsState)
    return(
        <div className={cls.catalog}>
            <h1>PRODUCTS</h1>
            <div className={cls.products}>
                {
                    productsState.map(({id,name,image,description,price,star}, index) => {
                        return(
                            <Product
                                key={index}
                                id={id}
                                name={name}
                                image={image}
                                description={description}
                                price={price}
                                star={star}
                                hundlerDelete={hundlerDelete}
                            />
                        )
                    })
                }
            </div>
            <Link href={"/"}>Go to home</Link>
        </div>
    )
}