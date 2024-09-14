import React from 'react'

import CourseSlideSection from './CourseSlideSection'

const CourseSection = () => {
  return (
    <section className=' container lg:w-[1320px] mt-24 '>

   
     <CourseSlideSection catergory={"Design"}/>
     <CourseSlideSection catergory={"Programming"}/>
     <CourseSlideSection catergory={"Marketing"}/>
     <CourseSlideSection catergory={"Data Skill"}/>
     <CourseSlideSection catergory={"Editing"}/>
    

    </section>
  )
}

export default CourseSection