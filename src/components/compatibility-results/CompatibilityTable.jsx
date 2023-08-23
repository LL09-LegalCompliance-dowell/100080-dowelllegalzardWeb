import React, { useState } from 'react'

const CompatibilityTable = ({ licenses }) => {

  const tableData = {
    val1:{
      condition:[
        {
          action:"Disclose Source Code",
          has_other_condition:false,
          permission:"No"
        },
        {
          action:"Disclose Source Code",
          has_other_condition:false,
          permission:"yez"
        },
        {
          action:"Disclose Source Code",
          has_other_condition:false,
          permission:"No"
        },
      ]
    },
    val2:{
      condition:[
        {
          action:"Disclose Source Code",
          has_other_condition:true,
          permission:"Yes"
        },
        {
          action:"Disclose Source Code",
          has_other_condition:false,
          permission:"yes"
        },
        {
          action:"Disclose Source Code",
          has_other_condition:false,
          permission:"Yes"
        },
      ]
    },
}
  return (
    <div className='my-10'>
      <h4 className='mb-5'>Explanation is based on the table below</h4>
      <table class="w-full table-fixed border border-slate-300">
        <thead>
          <tr>
            <th className='border border-slate-300 py-2 px-5'>Category</th>
            <th className='border border-slate-300 py-2 px-5'>{licenses?.license_1?.license_name}</th>
            <th className='border border-slate-300 py-2 px-5'>{licenses?.license_2?.license_name}</th>
          </tr>
        </thead>
        <tbody>
            <tr className=''>
              <td></td>
              <td className='text-center text-sm py-5'>conditions</td>
            </tr>
              {licenses?.license_1?.conditions?.map((condition, index)=>(
                <tr key={index}>
                  <td className='border border-slate-300 py-2 px-5 text-center'>{condition?.action}</td>
                  <td className={`${condition?.permission.toLowerCase() === 'no' ? 'text-red-500' : 'text-green'} border border-slate-300 py-2 px-5 text-center`}>{condition?.permission}</td>
                  <td className={`${licenses?.license_2?.conditions[index].permission.toLowerCase() === 'no' ? 'text-red-500' : 'text-green'} border border-slate-300 py-2 px-5 text-center`}>{licenses?.license_2?.conditions[index].permission}</td>
                </tr>
              ))}
            <tr className=''>
              <td></td>
              <td className='text-center text-sm py-5'>Limitations/Disclaimer</td>
            </tr>
            {licenses?.license_1?.limitations?.map((limitation, index)=>(
                <tr key={index}>
                  <td className='border border-slate-300 py-2 px-5 text-center'>{limitation?.action}</td>
                  <td className={`${limitation?.permission.toLowerCase() === 'no' ? 'text-red-500' : 'text-green'} border border-slate-300 py-2 px-5 text-center`}>{limitation?.permission}</td>
                  <td className={`${licenses?.license_2?.limitations[index].permission.toLowerCase() === 'no' ? 'text-red-500' : 'text-green'} border border-slate-300 py-2 px-5 text-center`}>{licenses?.license_2?.limitations[index].permission}</td>
                </tr>
              ))}
        </tbody>
      </table>

    </div>
  )
}

export default CompatibilityTable