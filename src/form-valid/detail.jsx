import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalSv from './modalSv';
import { setRemove } from './slice'
import { useEffect } from 'react';
export default function Detail() {
    const listSv = useSelector((state) => state.formValidReducer.listSv);
    const dispatch = useDispatch();
    const renderListSv = () => {
        return listSv.map((item) => {
            return (
                <tr key={item.id} className="bg-white border-b  border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {item.id}
                    </th>
                    <td className="px-6 py-4">
                        {item.name}

                    </td>
                    <td className="px-6 py-4">
                        {item.phone}

                    </td>
                    <td className="px-6 py-4">
                        {item.email}
                    </td>
                    <td className='py-4'>
                        <div>
                            <div>
                                <ModalSv data={item} />
                            </div>
                            <button
                                onClick={() =>

                                    dispatch(setRemove(item.id))
                                }
                                type="button"
                                className="focus:outline-none  cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                                Xóa</button>
                        </div>
                    </td>


                </tr>
            )
        })
    }
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col" className=" w-1/10 px-6 py-3">
                            Mã SV
                        </th>
                        <th scope="col" className=" w-3/10 px-6 py-3">
                            Họ tên
                        </th>
                        <th scope="col" className="w-2/10 px-6 py-3">
                            Số điện thoại
                        </th>
                        <th scope="col" className="w-2/10  px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-4 py-3 w-1/10 whitespace-nowrap">
                            Chức Năng
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderListSv()}
                </tbody>
            </table>
        </div>
    )
}
