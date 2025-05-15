import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button"



function HeroSection() {
  return (
    // <div
    //     className="h-auto  md:h-screen width-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 bg-gradient-to-b from-black to-gray-900 text-white"
    // >

    //       <Spotlight
    //     className="-top-40 left-0 md:-top-20 md:left-60"
    //     fill="white"
    //   />
    //     <div
    //         className="p-4  relative z-10 flex flex-col items-center justify-center text-center"
    //     >
    //         <h1
    //              className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" 
    //         >Master Of Artificial Intelligence</h1>
    //         <p 
    //             className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
    //         >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eum ut harum id eaque quam aspernatur voluptate ducimus tenetur voluptates repellendus, labore, deleniti tempora cumque, voluptas voluptatibus libero expedita. Nihil enim facilis dolor id. Quos hic dolor enim pariatur magni!</p>
    //         <div className="mt-40">
    //             <Link href={"/courses"}>
    //                 Explore Courses
    //             </Link>
    //         </div>
    //     </div>
    // </div>
    <div className="relative flex  flex-col h-[50rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center z-0">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-10 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mt-45 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Maruti Petroleum  <br /> Indian Oil
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          <b>Welcome to Maruti Petroleum</b> <br />
          Maruti Petroleum is your reliable source for high-quality petrol and diesel. We are committed to delivering efficient, safe, and customer-focused service across commercial, industrial, and retail sectors. With modern infrastructure and transparent operations, we ensure a smooth and trustworthy fueling experience. At Maruti Petroleum, we fuel your journey and power your progress.
        </p>
      </div>
      <div className="relative z-10 mt-10 flex justify-center px-4">
        <Link
          href={"/#fuels"}
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "w-full max-w-xs sm:max-w-sm md:max-w-md bg-white text-black hover:bg-gray-200 text-center",
            })
          )}
        >
          Explore Our Fuels
        </Link>
      </div>


    </div>



  )
}

export default HeroSection