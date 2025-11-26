import { cn } from "@/lib/utils";

import GridGlobe from "./gridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-2 container-x pt-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  img,
  description,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  img?: string;
  description?: string | React.ReactNode;
  titleClassName?: string;
}) => {
  const leftLists = ["ReactJS", "NextJS", "Typescript"];
  const rightLists = ["VueJS", "React Native", "ThreeJS"];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-lg group/bento transition duration-200 justify-between flex flex-col space-y-4 bg-[#04071D]",
        className
      )}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "400px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      }}
    >
      {/* add img divs */}
      <div className={`h-full`}>
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5"
          )}
        >
          <div className="font-extralight md:max-w-32 md:text-xs text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className={`text-lg lg:text-2xl max-w-96 font-bold z-10`}>
            {title}
          </div>
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-2 md:gap-3 w-fit absolute -right-3 md:right-0">
              {/* tech stack lists */}
              <div className="flex flex-col gap-2 md:gap-4 pt-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-card"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-card"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <span className="py-4 px-3 rounded-lg text-center bg-card"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-card"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
