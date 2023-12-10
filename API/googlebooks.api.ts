import express from 'express'
const app = express()

interface bookDetails{
    bookTitle: string,
    bookSubtitle: string,
    bookPages: number,
    bookDescription: string,
    publisher: string,
    publishedYear: string,
    bookAuthor: string,
    categories: string[],
    bookThumbnail: string
}

let books: bookDetails[] | Partial<bookDetails>[];

const googleAPI : string = 'https://www.googleapis.com/books/v1/volumes?q='
let maxResults : string = '&maxResults='
let startIndex : string = '&startIndex='

let bookSearch : string = 'q='
let authorSearch : string = '+inauthor='

let helloword : Partial<bookDetails> = {
    bookPages: 123
}

books.push(helloword);