import React, { useState } from 'react'
import data from './accordian/data.js';

function Index() {
    const [selected , setSelected] = useState(null);
    function handleSingleSelection(getCurrId){
        setSelected(getCurrId);
    }
    console.log(selected)
  return (
    <div className='wrapper flex justify-center items-center'>
        <div className='accordian '>
            {
                data&&data.length>0?
                data.map(dataItem=><div className='item'>
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className='title text-center'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected===dataItem.id?
                        <div>{dataItem.answer}</div>
                        :null
                    }
                </div>)
                : <div>No data found </div>
            }
        </div>
    </div>
  )
}

export default Index