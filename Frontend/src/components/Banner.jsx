import React from 'react'
import book from "../../public/books.jpg"
export default function Banner() {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
            <div className="w-full order-2 md:order-1 md:w-1/2">
                <p className="text-5xl text-bold mt-20">Hello, welcome here to learn something <span className="text-pink-600">new everyday!!!</span></p>
                <div className="mt-10">
                    <p className="text-grey">Welcome to Book Store – your ultimate online destination for book lovers! Whether you're an avid reader, a casual browser, or someone looking for the next great literary adventure, Book Store offers a curated selection of books across all genres, from timeless classics to contemporary masterpieces</p>
                </div>
                <div className="mt-7">
                    <label className="border p-3 rounded-md flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow outline-none" placeholder="Enter your email to login" />
                    </label>
                </div>
                <div className="mt-7">
                    <button className="btn btn-secondary">Secondary</button>
                </div>
            </div>
            <div className="w-full order-1 md:order-2 md:w-1/3">
                <img src="https://i.pinimg.com/originals/9a/74/20/9a7420f5d8b80fc49a42a281b8cb4270.jpg" className="w-50 h-50 ml-20 mt-20" alt="Book Image"></img>
            </div>
        </div>   
    </>
  )
}
