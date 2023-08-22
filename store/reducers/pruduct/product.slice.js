import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:"Products",
    reducers:{
        addProduct:(state,{payload}) => {
            const maxId = Math.max(...state.Products.map(item => item.id)) + 1
            return{
                ...state,
                Products:[...state.Products,{
                    name:payload.name,
                    image:payload.image,
                    description:payload.description,
                    star:payload.star,
                    price:payload.price,
                    id: maxId !== -Infinity ? maxId + 1 : 1
                }]
            }
        }
    },
    initialState:{
        Products:[]
    }
})

export default productSlice.reducer

export const productActions = productSlice.actions

export const productSelector = state => state.products