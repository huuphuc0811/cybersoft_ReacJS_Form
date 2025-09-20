import React, { useEffect, useState } from 'react'
import { setEdit, setUpdate } from './slice';
import { useDispatch, useSelector } from 'react-redux';
export default function ModalSv(props) {
    const { data } = props;
    const dispatch = useDispatch()
    const detailSv = useSelector((state) => state.formValidReducer.detailSv);
    const checkId = useSelector((state) => state.formValidReducer.validMessage);
    const [user, setUser] = useState({
        id: "",
        name: "",
        phone: "",
        email: ""
    });

    // Khi detailSv thay đổi → cập nhật lại form
    useEffect(() => {
        if (detailSv) {
            setUser(detailSv);
        }
    }, [detailSv]);

    // Handle input change
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    // Handle Update SV 
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(setUpdate(user));
    }


    return (
        <div>
            {/* Modal toggle */}
            <button data-modal-target="crud-modal" data-modal-toggle="crud-modal"
                onClick={() => { dispatch(setEdit(data)) }}
                className="focus:outline-none  cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " type="button">
                Sửa
            </button>
            {/* Main modal */}
            <div id="crud-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow-sm ">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 ">
                                Cập nhật sinh viên
                            </h3>
                            <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <form className="p-4 md:p-5" onSubmit={handleUpdate}>
                            <div className=' justify-between '>
                                <div className="mb-5">
                                    <label htmlFor="email2" className="block mb-2 text-sm font-medium text-gray-900"
                                    >Mã SV</label>
                                    <input
                                        type="text"

                                        name='id'
                                        disabled={true}
                                        value={user.id}
                                        onChange={handleOnChange}
                                        className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900"
                                    >Số điện thoại</label>
                                    <input
                                        type="text"

                                        name='phone'
                                        value={user.phone}
                                        onChange={handleOnChange}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password2"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >Ho ten</label>
                                    <input
                                        type="text"

                                        name='name'
                                        value={user.name}
                                        onChange={handleOnChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email2" className="block mb-2 text-sm font-medium text-gray-900"
                                    >Email</label>
                                    <input
                                        type="email"

                                        name='email'
                                        value={user.email}
                                        onChange={handleOnChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="name@flowbite.com" required />
                                </div>

                            </div>
                            <button type="submit"
                                data-modal-toggle="crud-modal"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                                Cập nhật
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}
