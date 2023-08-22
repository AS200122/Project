import cls from "./product.module.css"
import { useState } from "react"

export default function Product({
    id,
    name,
    image,
    description,
    price,
    star,
    hundlerDelete
}) {
    const[show,setshow] = useState(false)
    const[edit,setEdit] = useState("")
    return (
        <div className={cls.product}>
            <img width={100} height={100} className={cls.image} src={image} />
            <p className={cls.name}>{!show && name}
               {show && <input type="text"  onChange={(e) => {
                    setEdit(e.target.value)
               }}/>}
            </p>
            <div className={cls.description}>
                <p>{!show && description}{edit}</p>
               {show && <input type="text" onChange={(e) => {
                    setEdit(e.target.value)
               }}/>}
            </div>
            <div className={cls.footer}>
                <p className={cls.price}>{price}</p>
                <div className={cls.stars}>{star}</div>
            </div>
            <button onClick={() => {
                hundlerDelete(id)
            }}>Delete</button>
            <button onClick={() => {
                setshow(!show)
            }}>Edit</button>
            <button onClick={() => {
                setEdit()
            }}>scdad</button>
        </div>
    )
}