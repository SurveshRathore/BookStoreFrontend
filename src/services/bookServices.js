import axios from "axios";

const BookConfig = {
    headers: {
        
         Authorization: `Bearer ${localStorage.getItem("bookToken")}`
    }
}


export const GetAllBookApi = ()=>{

    console.log(BookConfig.headers.authorization)
    let response = axios.get("https://localhost:5001/BookStore/Book/GetAllBooks", BookConfig)

    return response
}

export const getBookByIdAPI = (bookObj) => {
    let response = axios.get(`https://localhost:5001/BookStore/Book/GetBooksById?BookId=${bookObj}`,BookConfig)
    return response
}

export const addBookToCartApi = (cartObj) => {
    let response = axios.post(`https://localhost:5001/BookStore/Cart/AddBookToCart?bookId=${cartObj.bookId}&bookQuantity=${cartObj.bookQuantity}`,null, BookConfig)
    return response
}

export const addBookToWishlistApi = (bookId) => {
    let response = axios.post(`https://localhost:5001/BookStore/WishList/AddToWishlist?BookId=${bookId}`,null, BookConfig)
    return response
}

export const getAllCartBookApi = () => {
    let response = axios.get("https://localhost:5001/BookStore/Cart/GetCartBook", BookConfig)
    return response
}

export const getAllWishlistBookApi = () => {
    let response = axios.get("https://localhost:5001/BookStore/WishList/GetWishlistDetails", BookConfig)
    return response
}

export const removeFromWishListAPi = (id) => {
    let response = axios.delete(`https://localhost:5001/BookStore/WishList/RemoveFromWishlist?WishlistId=${id}`,BookConfig)
}

export const getAllAddressAPI = () => {
    let response = axios.get("https://localhost:5001/BookStore/Address/GetAllAddress",BookConfig)
    return response
}

export const deleteCartAPI = (id) => {
    let response = axios.delete(`https://localhost:5001/BookStore/Cart/DeleteCartBook?cartId=${id}`,BookConfig)
    return response
}

export const AddOrderAPI = (orderData) => {
    let response = axios.post("https://localhost:5001/BookStoreOrder/PlaceOrder", orderData, BookConfig)
    return response
}

export const updateCartQuantityAPI = () => {
    let response = axios.patch("https://localhost:5001/BookStore/Cart/UpdateBookInCart?bookQuantity=1&cartID=1", BookConfig)
    return response
}