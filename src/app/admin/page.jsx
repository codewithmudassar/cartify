import React from 'react'

const page = () => {
  return (

    <div className=' h-screen p-4'><h1 className='text-xl flex  bg-gray-100 item-center justify-center p-4 font-bold mb-6 shadow'>Admin Dashboard</h1>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
      <div className='bg-yellow-200 p-6  rounded-md shadow'> 
        <h2 className=' font-semibold'>Users</h2>
      </div>

      <div className='bg-pink-300 p-6 rounded-md shadow '> <h2 className=' font-semibold'>Orders</h2>
      </div>

      <div className='bg-indigo-200 p-6 rounded-md shadow '> <h2 className=' font-semibold'>Revenu</h2>
      </div>

      
      <div className='bg-violet-200 p-6 rounded-md shadow '> <h2 className='font-semibold'>Products</h2>
      </div>

    </div>
    <div className='grid grid-cols-1 lg:grid-col-3 gap-6 mb-8'>
      <div className='bg-gray-100 p-6 rounded-lg shadow col-span-2'>
        <h2 className='text-lg font-semibold mb-4'>Sales Overview</h2>
        <div className=' h-48 bg-grey-100 flex item-center justify-center'>Chart</div>
         </div>
    </div>

    <div className='bg-gray-100 p-6 rounded-lg shadow mb-8'>
      <h2 className='text-lg font-semibold mb-4'>Notifications</h2>
      <ul className='space-y-2 text-grey-600'>
        <li>New order placed</li>
        <li>User signed up</li>
        <li>Stock alert for product</li>
        </ul>
        </div>

   <div className='bg-gray-100 p-6 rounded-lg shadow mb-4'>
      <h2 className='text-lg font-semibold mb-4'>Recent Orders</h2>
      <table className='w-full border-t-2 border-gray-400 text-left'>
        <thead className='bg-gray-100'>
          <tr>
             <th className='p-2'>Order ID </th>
             <th className='p-2'>Customer</th>
             <th className='p-2'>Date</th>
             <th className='p-2'>Status</th>
             </tr>
             </thead>
              <tbody>
                <tr className='border-t-2'>
                   <td className='p-2'>#256</td>
                   <td className='p-2'>Umaima</td>
                   <td className='p-2'>02 Aug 2025</td>
                   <td className='p-2 text-green-500'>Completed</td>
                   </tr>
                   <tr className='border-t-2'>
                  <td className='p-2'>#257</td>
                  <td className='p-2'>Helya</td>
                  <td className='p-2'>02 Aug 2025</td>
                  <td className='p-2 text-yellow-500'>Pending</td>
                  </tr>
    </tbody>
  </table>
</div>

      </div>

      
      

  )
}

export default page
