import React from 'react'
import CheckIcon from '../icons/CheckIcon'
import Warning from '../icons/Warning'
import DownIcon from '../icons/DownIcon'

function HeaderComponent() {
  return (
    <div>
        <div className='flex bg-[#272343] w-full text-white font-light justify-between px-10'>
          <div  className='flex'>  
                <CheckIcon />
            <p>Free shipping on all orders over $50</p>
          </div>

          <div  className='flex gap-5'> 
            <div  className='flex items-center '>
                <DownIcon/>
            <p>Eng</p>   
            </div>

             <p>Faqs</p>

            <div  className='flex items-center'>
                <Warning/>
                    <p>Need held</p>
            </div>
        
            </div>
            

        </div>  
      
      <div>

      </div>
    </div>
  )
}

export default HeaderComponent
