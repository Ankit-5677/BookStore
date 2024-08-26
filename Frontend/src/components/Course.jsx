import React, { useEffect, useState } from 'react'
import Freebook from './Freebook'
import axios from "axios";
import Cards from './Cards'
import { Link } from 'react-router-dom'

export default function Course() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try{
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <p className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you <span className="text-pink-500">Here!:)</span>
          </p>
          <p className="m-7 text-slate-500">
          Reading books exercises your brain, keeping it active and engaged. This mental stimulation can help prevent cognitive decline and improve overall brain function. Engaging with a book requires focus, which enhances your concentration and sharpens your thinking skills. Immersing yourself in a good book can be a great way to relax and reduce stress. Reading transports you to different worlds and lets you escape from everyday worries. The act of focusing on a narrative or absorbing new information can be meditative and calming.
          </p>
          <Link to="/">
          <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 hover:cursor-pointer">Back</button>
          </Link>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}
