import React from 'react'

const CompatibilityTable = () => {
  return (
    <div className='my-10'>
      <h4 className='mb-10'>Comparison</h4>
      <table class="w-full table-fixed border border-slate-300">
        <thead>
          <tr>
            <th className='border border-slate-300 py-2 px-5'>Category</th>
            <th className='border border-slate-300 py-2 px-5'>Apache</th>
            <th className='border border-slate-300 py-2 px-5'>LGPL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-slate-300 py-2 px-5 text-center'>Yes</td>
            <td className='border border-slate-300 py-2 px-5 text-center'>No</td>
            <td className='border border-slate-300 py-2 px-5 text-center'>No</td>
          </tr>
          <tr>
            <td className='border border-slate-300 py-2 px-5 text-center'>Yes</td>
            <td className='border border-slate-300 py-2 px-5 text-center'>Yes</td>
            <td className='border border-slate-300 py-2 px-5 text-center'>No</td>
          </tr>
          <tr>
            <td className='border border-slate-300 py-2 px-5 text-center'>No</td>
            <td className='border border-slate-300 py-2 px-5 text-center'>Yes</td>
            <td className='border border-slate-300 py-2 px-5 text-center'>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompatibilityTable