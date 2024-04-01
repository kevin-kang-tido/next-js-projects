import React from 'react'
import TableComponents from './../../components/table/tableComponent';

const page = () => {
  return (
    <>
      {/* This is dashboard page */}
       <div className='m-8'>
        <h1 className='font-bold text-[24px] text-blue-700'>Data Table</h1>
       <TableComponents/>
       </div>

    </>
  )
}
export default page
