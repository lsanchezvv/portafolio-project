import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { GithubLogo } from "./icons";
import ExperienceCounter from "@/components/experience-counter";

const TECH_STACK = [
  "Node.js", "TypeScript", "C# .NET", "Kotlin", "Python",
  "Postgres", "MongoDB", "DynamoDB",
  "Kafka", "SQS", "RabbitMQ",
  "Docker", "Kubernetes", "AWS", "Azure", "Vercel",
  "Fastify", "NestJS", "Next.js", "React",
  "OpenAI", "Anthropic", "Gemini",
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">

          {/* Left column */}
          <div className="flex-[1.2] flex flex-col gap-5">
            <Badge variant="secondary" className="w-fit">About Me</Badge>
            <h2 className="text-4xl font-bold tracking-tight">
              Backend System Connoisseur
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              With over a decade of experience in software development, I specialize
              in building scalable and resilient backend systems using modern and
              proven technologies. I value clear communication, well-defined goals,
              and strong team culture. While my roots are in the backend, I&apos;m no
              stranger to frontend work — even if centering a div still takes me a
              moment.
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
              <a href="https://github.com/lsanchezvv" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full">
                  <GithubLogo />
                  View Github
                </Button>
              </a>
              <a href="/luis_sanchez_sr_backend.pdf" download>
                <Button variant="outline" className="rounded-full">
                  <Download />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-4">
            <ExperienceCounter variant="years" />
            <hr className="border-border w-10" />
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="bg-muted border border-border rounded-md px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
