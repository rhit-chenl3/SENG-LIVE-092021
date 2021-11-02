export const books = [
    {
      id: 1,
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marjin Haverbeke",
      genre: "technical",
      liked: true,
    
      reviews: [
        {
         user_id: 1,
          content: "Good book, but not great for new coders"
        }
      ]
    },
    {
      id: 2,
      title: "JavaScript & JQuery: Interactive Front-End Web Development",
     author: "Jon Duckett",
      genre: "technical",
      liked: true,
      image: "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX258_BO1,204,203,200_.jpg",
      price: 15,
      reviews: [
        {
         user_id: 15,
          content: "good way to learn JQuery"
        }
      ]
    },
    {
      id: 4,
      title: "JavaScript: The Definitive Guide",
     author: "David Flanagan",
      genre: "technical",
      liked: false,
      image: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 13,
      reviews: [
        {
         user_id: 44,
          content: "Great intro to js book"
        },
        {
         user_id: 350,
          content: "It really is the Definitive guide"
        }
      ]
    },
    {
      id: 5,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      genre: "technical",
      liked: true,
      image: "https://learning.oreilly.com/library/cover/9780596517748/250w/",
      price: 10,
      reviews: [
        {
         user_id: 4,
          content: "I disagree with everything in this book"
        },
        {
         user_id: 350,
          content: "This is the only js book you need"
        }
      ]
    },
    {
      id: 6,
      title: "Learning React: Functional Web Development with React and Redux",
     author: " Alex Banks and Eve Porcello",
      genre: "technical",
      liked: false,
      image: "https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 34,
      reviews: [
        {
         user_id: 99,
          content: "Good deep dive into react"
        },
        
      ]
    },
    {
      id: 7,
      title: "Ancillary Justice: The Imperial Radch Series",
     author: " Ann Leckie",
      genre: "sci-fi",
      liked: false,
      image: "https://images-na.ssl-images-amazon.com/images/I/51X2LWasYBL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 9.99,
      reviews: [
        {
         user_id: 103,
          content: "The imperial redach is my favorite sci-fi"
        },
      ]
    },
    {
      id: 7,
      title: "The Ravens Tower",
     author: " Ann Leckie",
      genre: "fantasy",
      liked: false,
      image: "https://m.media-amazon.com/images/I/812lac5vXoL._AC_UY218_.jpg",
      price: 11.99,
      reviews: [
        {
         user_id: 103,
          content: "A unique and modern fantasy, saying it was inspired by hamlet is a very loose description that undersells the creativity and uniqueness of this story"
        },
      ]
    },
    {
      id: 9,
      title: "The Ravens Tower",
     author: "N.K. Jeminsin",
      genre: "fantasy",
      liked: false,
      image: "https://m.media-amazon.com/images/I/91JSBdkdw+L._AC_UY218_.jpg",
      price: 25.99,
      reviews: [
        {
         user_id: 444,
          content: "Who knew a post-apocalyptic fanatsy could forge a new path over well-trodden ground while still packing an emotional punch?"
        },
      ]
    },
    {
      id: 10,
      title: "How Not to Be Wrong: The Power of Mathematical Thinking",
     author: "Jordan Ellenburg",
      genre: "non-Fiction",
      liked: false,
      image: "https://m.media-amazon.com/images/I/8115+ugiQ3L._AC_UY218_.jpg",
      price: 13.99,
      reviews: [
        {
         user_id: 987,
          content: "Easy to follow, humorously presented . . . This book will help you to avoid the pitfalls that result from not having the right tools. "
        },
      ]
    },
    {
      id: 11,
      title: "The Disappearing Spoon: And Other True Tales of Madness, Love, and the History of the World from the Periodic Table of the Elements ",
     author: "Sam Kean",
      genre: "non-Fiction",
      liked: false,
      image: "https://images-na.ssl-images-amazon.com/images/I/61UFVH20eJL._SX319_BO1,204,203,200_.jpg",
      price: 7.99,
      reviews: [
        {
         user_id: 120,
          content: "Nearly 150 years of wide-ranging science...and Kean makes it all interesting. Entertaining and enlightening."
        },
      ]
    },
    
  ]
export const genres = [
    "horror",
    "technical",
    "fantasy",
    "sci-fi",
    "non-Fiction",
    "fiction",
    "mystery",
    "biography"
  ]
