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

const fuelData = [
  {
    id: "petrol",
    title: "Petrol",
    description:
      "High-quality Indian Oil petrol for smooth and efficient performance. Available 24×7 with accurate dispensing, quick service, and digital payment options.",
    price: "₹106.25 / litre", // example price, update as needed
    slug: "petrol",
  },
  {
    id: "diesel",
    title: "Diesel",
    description:
      "Reliable Indian Oil diesel for commercial, agricultural, and private use. Trusted by thousands for mileage, quality, and service excellence.",
    price: "₹92.80 / litre", // example price, update as needed
    slug: "diesel"
  }]

function FeaturedCourses() {
  const featuredCourses = CourseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">WHY CUSTOMERS CHOOSE US</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Trusted Fuel. Local Service. Everyday Reliability.
        </p>
      </div>

      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {fuelData.map((fuel) => (
            <div key={fuel.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm p-4">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                    {fuel.title}
                  </p>
                  <p className="text-sm text-neutral-400 mb-2">{fuel.price}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {fuel.description}
                  </p>
                  <Link
                    href={`/fuel/${fuel.slug}`}
                    className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition duration-200 mt-4"
                  >
                    Visit Us
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div> */}
    </div>
  );
}

export default FeaturedCourses;
