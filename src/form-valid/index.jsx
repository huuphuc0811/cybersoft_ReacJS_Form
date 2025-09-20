import React from 'react'
import SinhVien from './sinhvien'
import Detail from './detail'

export default function FormValid() {
    return (
        <div className='px-2'>
            <div className='pb-3'>
                <p className="text-xl px-4 font-bold py-4 text-white uppercase bg-gray-50 dark:bg-gray-700">Thông tin sinh viên</p>
            </div>
            <SinhVien />
            <div className='py-5'>
                <Detail />
            </div>
        </div>
    )
}
