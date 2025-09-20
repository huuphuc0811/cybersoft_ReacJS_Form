import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleOnChangeRedux, submit, setAddSv } from "./slice"

export default function SinhVien() {
  const user = useSelector((state) => state.formValidReducer.user)
  const validId = useSelector((state) => state.formValidReducer.validMessage)

  // const listSV = useSelector((state) => state.formValidReducer.listSV)
  const dispatch = useDispatch()
  const formRef = useRef(null);


  // Handle On Change With Redux 
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    dispatch(handleOnChangeRedux({ name, value }));
  }
  const handleAddSv = (e) => {
    e.preventDefault();
    dispatch(setAddSv(user));

    // Reset form after submit 
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <div>
      <form className="px-4" ref={formRef}
        onSubmit={handleAddSv}
      >
        <div className='flex justify-between gap-5'>
          <div className='w-[45%]'>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"
              >Mã SV</label>
              <input
                type="text"
                id="id"
                name='id'
                onChange={handleOnchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required />
              {validId && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium"> {validId}</span>
              </div>}
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900"
              >Số điện thoại</label>
              <input
                type="text"
                id="password"
                name='phone'
                onChange={handleOnchange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required />
            </div>
          </div>
          <div className='w-[45%]'>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900"
              >Họ tên</label>
              <input
                type="text"
                id="name"
                name='name'
                onChange={handleOnchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"
              >Email</label>
              <input
                type="email"
                id="email"
                name='email'
                onChange={handleOnchange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com" required />
            </div>
          </div>
        </div>
        <button type="submit"

          className="text-white cursor-pointer bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >Thêm sinh viên</button>
      </form>
    </div>
  )
}
