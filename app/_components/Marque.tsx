import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "HTML",
    
    body: "Structures your web pages layout.",
    img: "/html.svg",
  },
  {
    name: "CSS",
   
    body: "CSS (Cascading Style Sheets) is used to style and layout web pages.",
    img: "/css.svg",
  },
  {
    name: "Javascript",
    
    body: "JavaScript is a lightweight interpreted programming language.",
    img: "/javascript.svg",
  },
  {
    name: "React.js",
   
    body: "The library for web and native user interfaces.",
    img: "/react.svg",
  },
  {
    name: "Tailwind CSS",
   
    body: "A utility-first CSS framework packed with classes",
    img: "/tailwind.png",
  },
  {
    name: "Next.js",
    body: "The React Framework for the Web.",
    img: "/nextjs.svg",
  },
  {
    name: "Express.js",
    body: "Fast, unopinionated, minimalist web framework for Node.js.",
    img: "/express.svg",
  },
  {
    name: "Node.js",
    body: "Javascript runtime environment.",
    img: "/node-js.svg",
  },
  {
    name: "Firebase",
    body: "Add Authentication to your app with ease.",
    img: "/firebase.svg",
  },
  {
    name: "Shadcn UI",
    body: "Ultimate React component copy paste UI library",
    img: "/shadcn.jpg",
  },
  {
    name: "GSAP",
    body: "Add and control the animations in your website.",
    img: "/gsap.png",
  },
  {
    name: "Framer Motion",
    body: "Framer Motion is a simple yet powerful motion library for React.",
    img: "/framer-motion.png",
  },
  {
    name: "C++",
    body: "My goto programming language for practicing DSA.",
    img: "/c++.png",
  },

  {
    name: "Mongo DB",
    body: "A database management system that uses flexible documents instead of tables and rows.",
    img: "/mongodb.svg",
  },
  {
    name: "Typescript",
    body: "A superset of javascript, helps in type safety.",
    img: "/typescript.svg",
  },
  
  {
    name: "Figma",
    body: "How you design, align, and build matters. Do it together with Figma.",
    img: "/figma.png",
  },
  {
    name: "Postman",
    body: "Test your APIs endpoints effortlessly.",
    img: "/postman.svg",
  },
  {
    name: "Github",
    body: "An open source contribution platform.",
    img: "/github.svg",
  },
  {
    name: "AWS-S3",
    body: "Cloud storage provided by Amazon.",
    img: "/amazon-s3.png",
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username?: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div  className="flex flex-row items-center gap-2">
        <img className=" w-[35px] bg-transparent" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const Marque = () => {
  return (
    <div id="skills" className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-t-2 border-[#1f1f1f]  bg-background py-14 md:shadow-xl">
        <div className="mb-[5rem] w-full z-[999] px-[8.2rem]">
            <h1 className="text-5xl w-full flex items-start justify-start font-semibold">SKILLS</h1>
            <p className="text-xl  mb-[3rem] font-medium text-gray-500">What I&apos;ve learnt so far</p>
            <p className="w-[80%] text-lg">I am a skilled software developer with proficiency in Web Development, and expertise in numerous libraries and frameworks including React.js, Next.js, Tailwind CSS, Express.js, Node.js, Shadcn-UI, etc. I am a quick learner, possess adaptive nature, leadership qualities and abilities to work in a team effectively. Know more about my skills and projects below.</p>
        </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] mb-20">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
};


