'use client';
import CourseData from "../data/musicc_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { CardBody, CardContainer, CardItem } from "@/componts/ui/3d-card";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = CourseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>

      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm p-4">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition duration-200 mt-4"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
              {/* <CardContainer className="inter-var" key={course.id}>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border">

                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-800 dark:text-white"
                  >
                    {course.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-600 text-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={`https://source.unsplash.com/random/400x200?sig=${course.id}`} // Optional image placeholder
                      alt={course.title}
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/courses/${course.slug}`}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-black"
                    >
                      Learn More →
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      as="span"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      ₹{course.price}
                    </CardItem>
                  </div>

                </CardBody>
              </CardContainer> */}

            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
