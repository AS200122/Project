import cls from "./addProduct.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { productActions } from "@/store/reducers/pruduct/product.slice"

const initialState = {
    image:"",
    name:"",
    description:"",
    price:"",
    star:0,
}

export default function Add() {
    const [state, setState] = useState(initialState)
    const router = useRouter()
    const dispatch = useDispatch()
    const addHandler = e => {
        e.preventDefault()
        setState(initialState)
        dispatch(productActions.addProduct({
            ...state
        }))
    }
    return(
        <div className={cls.form}>
            <input className={cls.input} value={state.image} type="text" onChange={(e) => {
                setState({
                    ...state,
                    image:e.target.value
                })
            }} placeholder="IMG" />
            <input className={cls.input} value={state.name} type="text" onChange={(e) => {
                setState({
                    ...state,
                    name:e.target.value
                })
            }} placeholder="NAME" />
            <input className={cls.input} type="text" value={state.description} onChange={(e) => {
                setState({
                    ...state,
                    description:e.target.value
                })
            }} placeholder="DESCRIPTION" />
            <input className={cls.input} type="text" value={state.price} onChange={(e) => {
                setState({
                    ...state,
                    price:e.target.value
                })
            }} placeholder="PRICE" />
            <div className={cls.stars}>
                <input className={cls.inputStar} min={0} max={5} type="range" value={state.star} onChange={(e) => {
                    setState({
                        ...state,
                        star:e.target.valueAsNumber
                    })
                }} placeholder="STAR" />
                <span>STARS: {state.star}</span>
            </div>
            <div className={cls.buttons}>
                <button className={cls.button} onClick={addHandler}>ADD</button>
                <button className={cls.button} onClick={() => {
                    router.push("/")
                }}>GO TO HOME</button>
                <button className={cls.button} onClick={() => {
                    router.push("./catalog")
                }}>GO TO CATALOG</button>
            </div>
        </div>
    )
}