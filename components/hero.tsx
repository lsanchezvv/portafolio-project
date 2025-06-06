import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
            <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
           "inset-x-0 h-full skew-y-12"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-green-500"
      />
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,blue,transparent)]",
          "inset-x-0 h-full skew-y-12"
          
        )}
      /> */}
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Senior Software Engineer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Building Scalable and Resilient Backend Systems
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
        Hey, I&apos;m Luis — a Senior Software Engineer with solid experience building scalable and resilient backend systems. I&apos;ve had the opportunity to start and lead projects from scratch, as well as enhance existing applications to meet new requirements from both user and business perspectives. On this website, I&apos;ve decided to expand on my experience and skills and provide more insight into my current and past projects. Stick around to see what I&apos;ve been up to!</p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <a href="#about">
            <Button size="lg" className="rounded-full text-base">
              See What I Do <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
