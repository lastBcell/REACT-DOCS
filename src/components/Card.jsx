import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileHover={{ scale: 1.1 }} whileDrag={{scale:1}}  whileTap={{ scale: 0.95 }}
    className=' relative w-50 h-65 bg-zinc-900/90 rounded-[40px] text-zinc-200 px-5 py-10 overflow-hidden'>
            <FaRegFileAlt/>
           <p className='text-sm leading-4 mt-5 font-semibold '>{data.description}</p>
            <div className='absolute bottom-0  w-full    left-0 text-white  '>
                <div className='flex   justify-between py-3 px-5 mb-3'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-6 h-6 bg-zinc-600 rounded-full flex justify-center items-center'>
                        {data.close?<IoIosClose size="1.1em" color='#ff' />:<LuDownload size="0.8em" color='#ff'/>}
                    
                    </span>
                </div>
                    {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "green"?"bg-green-600":"bg-sky-600"} flex item center justify-center `}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTittle}</h3>
                </div>
               )}
            </div>
                

    </motion.div>

  )
}

export default Card
