import express, { response } from 'express';
const apicalls = express()

// Contains the book details. Instead of creating an object again and again, a refference to the interface is made.
interface bookDetails {
    bookTitle: string,
    bookSubtitle?: string,
    bookPages: number,
    bookDescription?: string,
    publisher?: string,
    publishedYear?: string,
    bookAuthor: string,
    categories?: string[],
    bookThumbnail: string
}

// Assuming there are more than 1 book details, this variable holds all the books gathered from API
// let books : Array<Partial<bookDetails>> | Array<bookDetails> = [];
let books: Array<bookDetails> = [];

interface apiInterface {
    apiURL: string,
    maxResults?: string,
    startIndex?: string,
    bookSearch: string,
    authorSearch?: string
}

function settingAPI(params: { bookSearch: string, author?: string, maxResults?: string, startIndex?: string }): string {

    let maxResults = '&maxResults='
    let startIndex = '&startIndex='
    let authorSearch = '+inauthor='
    let apiURL = 'https://www.googleapis.com/books/v1/volumes?'
    let bookSearch = 'q=' + params.bookSearch

    const apiObject: apiInterface = {
        apiURL: apiURL,
        bookSearch: bookSearch
    }

    if (params.author != null) {
        authorSearch += params.author;
        apiObject.authorSearch = authorSearch;
        return apiObject.apiURL + apiObject.bookSearch + apiObject.authorSearch
    }
    if (params.maxResults != null) {
        maxResults += params.maxResults;
        apiObject.maxResults = maxResults;
    }
    if (params.startIndex != null) {
        startIndex += params.startIndex;
        apiObject.startIndex = startIndex;
    }
    // Write a condition to return a value based on their availability. Think about performance too.

    return apiObject.apiURL + apiObject.bookSearch
}

const url = settingAPI({
    bookSearch: 'after+eden',
    author: 'helen'
})

console.log(url)

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('API CALL FAILED')
        }
    })
    .then(data => {
        books.push(data)
    })
    .catch(error => {
        console.error(error)
    })
