"use strict"
import axios from 'axios';

export function getBooks(){
  return {
    type: "GET_BOOKS",
  }
}

export function postBooks(book){
  return function(dispatch){
    axios.post("/books", book).then(function(response){
      dispatch({
        type: "POST_BOOK",
        payload: response.data
      })
    }).catch(function(err){
      dispatch({
        type: "POST_BOOK_REJECTED",
        payload: "there was an error while posting a new book"
      })
    })
  }
}

export function deleteBooks(id){
  return {
    type: "DELETE_BOOK",
    payload: id
  }
}

export function updateBooks(book){
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}
