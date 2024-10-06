import BlogSection from "@/components/BlogSection";
import Choose from "@/components/Choose";
import HeroSection from "@/components/HeroSection";
import HomeCourses from "@/components/HomeCourses";
import Instructor from "@/components/Instructor";
import Seminer from "@/components/Seminer";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <HeroSection title={""} />
      <Choose />
      <HomeCourses />
      <Testimonials title={" What Our Learners Are Saying"} para={"Hear from our learners about how EduHub has helped them achieve their goals and advance their careers."} />
      <Seminer />
      <Instructor title={"Our Specialized Course Instructors"} para={"Our mission is to make high-quality learning from specialized instructors accessible to everyone."} number={3}  />
      <BlogSection />
    </main>
  );
}
