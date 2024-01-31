import React from 'react'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import {IoCloseSharp} from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const Project = ({ about,style, name, others, images}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
    <p className='text-white w-fit  px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-red-500 cursor-pointer duration-200 hover:scale-110 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 ' onClick={handleClickOpen}>
      About
    </p>
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
    <div className={'w-full bg-gradient-to-b from-black to-gray-800  text-white' + style}>
        <div className="bg-gradient-to-t from-gray-800 to-black h-16 p-4 px-10 md:px-20 flex justify-between">
            <p className='text-3xl cursor-pointer font-signature'></p>
            <p className='text-2xl cursor-pointer' onClick={handleClose}><IoCloseSharp /></p>
        </div>
        <div className='text-center mt-10 text-2xl'>
            <p>{name}</p>
        </div>
        <div className='flex justify-center mt-10'>
        <div className='grid grid-cols-3 gap-2 w-96'>
               {images?.map(({id, image}) => ( <img key={id} src={image} alt='' className='w-60 h-20 border-gray-700 rounded-lg border-[1px] shadow-md' />))}
        </div>
      
        </div>
       {!others && <div className='h-fit mt-1 md:mt-10 p-4 md:px-10'>
            <div className='text-xl p-2 '>
                <p >Description : </p>
            </div>
            <div className='flex flex-col md:mt-6 px-4'>
               {about.map(({id, data}) => ( <li key={id} className='mt-3'>{data}</li>))}
            </div>
            
        </div>
  }
  {
    others && 
    <div className='w-full h-fit md:px-10 flex flex-wrap justify-center text-white mt-10'>
          {about.map(({id, name, tech, description, image, github}) => (
          <div 
          className='w-full md:w-3/4 sm:justify-center md:justify-between flex flex-wrap mt-8 cursor-pointer border-gray-600 border-[1px] shadow-xl  p-2'
          key={id}>
            <div className='w-full flex justify-center md:w-1/4'>
            <img src={image} alt='' className='w-60 h-40  md:h-32  overflow-hidden' />
              </div>
            <div className='md:w-3/4 mt-4 md:mt-0 md:px-4'>
              <p className='text-center md:text-left'>
              {name}
              </p>
              <p className='mt-2 md:mt-0'>
                Technolgies Used :  {tech}
              </p>
              <button className='hidden md:block w-24 h-10 bg-gray-400 border-white shadow-md rounded-lg mt-6 text-gray-200 hover:text-white dur'>
              <a 
              className=''
              href={github}
              target="_blank"
              rel="noreferrer"
              > Github</a>
              </button>
            </div>
            <div>
            <p className='w-full py-4'>
                Description : {description}
              </p>
              <button className=' md:hidden w-24 h-10 bg-gray-400 border-white shadow-md rounded-lg mt-6 text-gray-200 hover:text-white dur'>
              <a 
              className=''
              href={github}
              target="_blank"
              rel="noreferrer"
              > Github</a>
              </button>
            </div>

          </div>
            ))}
        </div>
  }
        

    </div>

    </Dialog>
  </div>
  )
}
export default Project;