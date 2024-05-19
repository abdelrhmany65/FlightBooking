import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { booking } from "../Redux/action";

const Booking = () => {

    const data = useSelector((state) => state.data);
    const dispatch = useDispatch()
    const sic = data.length
    const [Book, setBook] = useState({})

    const handelChange = (e) => {

      const neawData = {...Book}
      neawData[e.target.name] = e.target.value
      setBook(neawData);

    } 

    const handelBook = (e) => {
      e.preventDefault();
      if (Object.keys(Book).length === 5) {
        dispatch(booking({...Book, id: sic + 1}))
      }
    } 
    console.log(Book);
    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="flex flex-col md:flex-row">
              <div className="py-1.5 px-2.5 flex-1 border-r-2">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <select className="outline-none px-2 py-2 w-full" name="from" required
                    onChange={(e) => handelChange(e)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Paris</option>
                    <option>Rome</option>
                  </select>
                </div>
              </div>
    
              <div className="py-1.5 px-2.5 flex-1 border-r-2">
                <p>Destination To</p>
                <div className="flex flex-row">
    
                  <select className="outline-none px-2 py-2 w-full" name="to" required
                    onChange={(e) => handelChange(e)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Paris</option>
                    <option>Rome</option>
                  </select>
                </div>
              </div>
    
              <div className="py-1.5 px-2.5 flex-1 border-r-2">
                <p>Journey Date</p>
                <input type="date" className="outline-none px-2 py-2 w-full date" name="date" required  onChange={(e) => handelChange(e)}/>
              </div>
    
              <div className="py-1.5 px-2.5 flex-1 border-r-2">
                <p>Guests</p>
                <div className="flex flex-row">
                  <select className="outline-none px-2 py-2 w-full" name="guests" required 
                    onChange={(e) => handelChange(e)}
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>
    
              <div className="py-1.5 px-2.5 flex-1 border-r-2">
                <p>className</p>
                <div className="flex flex-row">
                  <select className="outline-none px-2 py-2 w-full" name="ticketclassName" required onChange={(e) => handelChange(e)} >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>
    
              <button className="inline-flex items-center bg-indigo-500 text-white px-8 py-1 space-x-2"type="submit"
                onClick={(e) => handelBook(e)}
              >
                <FaPlus/>
                <span className="text-sm  ">Book</span>
              </button>
            </form>
          </div>
        </div>
      );
}

export default Booking