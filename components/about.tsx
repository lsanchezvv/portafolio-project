import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";
import ExperienceCounter from "@/components/experience-counter";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Backend System Connoisseur
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              <ExperienceCounter />
              of experience in software development, I specialize primarily in
              building scalable and resilient backend systems using modern and
              proven-to-work technologies and tools. I like to collaborate and
              contribute to team culture and growth by establishing good and
              clear communication, as well as having a clear set of goals and
              expectations in mind. Although my experience has been primarily in
              the backend, I have not been shy about working on frontend tasks,
              even if it takes me some time to center a div.
              <br />
              My experience includes working with different programming
              languages like Node.js, TypeScript, C# & .NET.
              <br />
              Different SQL and NoSQL database systems like Postgres, MongoDB &
              DynamoDB.
              <br />
              For queues and distributed streaming platforms I have used Kafka,
              SQS and RabbitMQ. When it comes to containerization and
              orchestration I have used on a dialy basis Docker and Kubernetes.
              <br />
              Lastly, I have worked with different cloud providers like AWS,
              Azure & Vercel and with different frameworks and libraries like
              Fastify, React, NestJS, NextJS, among others.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <a href="https://github.com/lsanchezvv" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full">
                  <GithubLogo />
                  View Github
                </Button>
              </a>
              <Button variant="outline" className="rounded-full">
                <Download />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/personal-photo.svg" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
