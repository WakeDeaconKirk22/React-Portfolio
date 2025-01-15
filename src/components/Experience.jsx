import React from 'react'
import { COURSES } from '../constants'
import { motion }  from "framer-motion"
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity: 0 ,y :-100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-4xl'> Courses
          </motion.h1>
          <div>{COURSES.map((courses,index) =>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{opacity: 1 , x:0}}
                initial={{opacity:0, x: -100}}
                transition={{duration:1}}
                className='w-full lg:w-1/4'>
                    <p className='mb-8 text-sm text-neutral-400'>{courses.year}</p>
                </motion.div>
                <motion.div 
                whileInView={{opacity: 1 , x:0}}
                initial={{initial: 0 , x:100 }}
                transition={{duration:1}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className=' mb-2 font-semibold'>{courses.subject}
                     <span className='text-sm text-purple-100 ml-1'>{courses.course}
                     </span>
                     </h6>
                     <p className='mb-4 text-neutral-400'>{courses.description}</p>
                     {Array.isArray(courses.technologies) && courses.technologies.length > 0 && (
                <div className='flex flex-wrap'>
                  {courses.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
                </motion.div>
            </div>
          ))}
          </div>
        
       
      
    </div>
  )
}

export default Experience
