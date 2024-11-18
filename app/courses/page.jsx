import CourseCategories from '@/components/CourseCategories'
import CourseHeroSection from '@/components/CourseHeroSection'
import CourseSection from '@/components/CourseSection'
import React from 'react'

const Courses = () => {
  return (
    <section >
      <CourseHeroSection/>
      <CourseCategories/>
      <CourseSection/>
    </section>
  )
}

export default Courses