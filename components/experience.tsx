import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

import ExperienceDescriptionExpand from "@/components/experience-description-expand";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  more?: string;
  technologies: string[];
  companyLink?: string;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  more,
  technologies,
  companyLink,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          {companyLink ? (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:underline"
            >
              {company}
            </a>
          ) : (
            <span className="text-lg font-semibold">{company}</span>
          )}
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <div
          className="prose prose-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {more && <ExperienceDescriptionExpand description={more} />}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Volvo Cars",
      companyLink: "https://www.volvocars.com/",
      period: "Jul 2023 - Present",
      description: `
<p>
  I work in a small, autonomous backend-focused team (6–8 members) within the Car Service Cluster at Volvo. We are responsible for service-related customer communications, including:
</p>
<ul class="pl-5 list-disc">
  <li>Vehicle Service Reminders</li>
  <li>Service Booking Notifications (email, push, and in-app)</li>
</ul>
`,
      more: `<p><strong>Backend & Infrastructure</strong></p>
<ul class="pl-5 list-disc">
  <li>Built and maintained several microservices using Node.js (Fastify).</li>
  <li>Codebase combines class-based and functional patterns.</li>
  <li>Followed testing best practices using Jest for unit tests and coverage.</li>
  <li>Used Kafka for event-driven architecture and Confluent Schema Registry for managing schemas.</li>
  <li>Deployed services in Kubernetes, managed via ArgoCD.</li>
  <li>CI/CD setup with GitHub Actions.</li>
  <li>Monitored systems using Grafana, Prometheus, and Kibana.</li>
  <li>Defined and maintained alerts and alarms based on custom metrics.</li>
</ul>

<p><strong>Communication Platform Ownership</strong></p>
<ul class="pl-5 list-disc">
  <li>
    Led the development of a Communication Microservice:
    <ul class="pl-5 list-disc">
      <li>Consumes Kafka events to determine the best communication channel (email, push, or in-app).</li>
      <li>Implemented a rules-based system for delivery logic.</li>
    </ul>
  </li>
  <li>Integrated tools like SendGrid, Iterable, and CMS platforms for localized content and templates.</li>
  <li>Worked closely with UI/UX designers (via Figma) to align messaging with design specs.</li>
</ul>

<p><strong>Collaboration & Workflow</strong></p>
<ul class="pl-5 list-disc">
  <li>Daily collaboration via Slack and Microsoft Teams.</li>
  <li>Regularly coordinated with multiple teams (Product, Design, Developer Experience, Other teams in the Cluster). This includes asking questions about requirements and other system dependencies, as well as coordinating releases and deployments.</li>
  <li>Participated in task scoping and prioritization, often defining and driving work based on product goals.</li>
</ul>`,
      technologies: [
        "Node.js",
        "Typescript",
        "PostgreSQL",
        "Kafka",
        "Docker",
        "Azure",
        "Kubernetes",
        "Grafana",
        "HashiCorp Vault",
        "Jest",
        "Oauth 2.0",
        "JWT",
      ],
    },
    {
      title: "Senior Backend Developer",
      company: "Airmee",
      companyLink: "https://www.airmee.com/",
      period: "Feb 2022 - Jul 2023",
      description: `<p>
  I was part of the Integration Team (2–3 developers) at Airmee, focused on building and maintaining the systems that allowed external businesses to use our delivery services. We handled integrations for companies of all sizes, managing the ingestion and processing of new delivery orders.
</p>
`,
      more: `<p><strong>Key Projects & Responsibilities</strong></p>
<ul class="pl-5 list-disc">
  <li>
    Led the development of a new integration for Amazon:
    <ul class="pl-5 list-disc">
      <li>Built a microservice in Node.js deployed via AWS Lambda.</li>
      <li>Used AWS SQS for event-driven ingestion of high-volume order data.</li>
      <li>Stored data in PostgreSQL.</li>
      <li>Set up CI/CD pipelines using Bitbucket Pipelines.</li>
      <li>Wrote unit tests using Mocha and assertion libraries.</li>
      <li>Performed end-to-end testing in a QA environment before production deployments.</li>
      <li>Monitored and maintained the service using AWS CloudWatch (alerts, alarms, dashboards).</li>
    </ul>
  </li>
  <li>Rewritten H&M Group integration and contributed to Shein integration, adapting to each client's requirements.</li>
  <li>Supported integrations over various channels:
    <ul class="pl-5 list-disc">
      <li>Public APIs used by clients.</li>
      <li>AS2 server setup and management for secure order ingestion.</li>
    </ul>
  </li>
</ul>

<p><strong>Technical Improvements</strong></p>
<ul class="pl-5 list-disc">
  <li>Promoted better backend practices by:
    <ul class="pl-5 list-disc">
      <li>Reducing reliance on database logic (stored procedures, DB functions).</li>
      <li>Refactoring business logic into microservices to improve testability and maintainability.</li>
      <li>Implemented functional programming patterns where suitable.</li>
      <li>Applied principles like separation of concerns and DRY to improve code structure and readability.</li>
    </ul>
  </li>
</ul>

<p><strong>Collaboration & Workflow</strong></p>
<ul class="pl-5 list-disc">
  <li>Worked directly with the CTO, Integration Manager, and external partners, including Amazon developers.</li>
  <li>Coordinated with internal teams responsible for order processing systems.</li>
  <li>Daily communication and coordination done via Slack.</li>
</ul>`,
      technologies: ["Node.js", "PostgreSQL", "AWS", "Lambda", "SQS", "Mocha"],
    },
    {
      title: "Backend Developer",
      company: "Freelance - Contractor",
      period: "Mar 2021 - Jan 2022",
      description:
        "Worked as a contractor creating and maintaining Microservices hosted in AWS, using NodeJS, AWS Lambda and PostgreSQL as the database. My daily duties were not limited to writing code, I was also involved in the system design decisions for the new implementations and improvement of the current systems. I was also involved in monitoring and improving performance of the API services & infrastructure, this included the creation of monitoring dashboards and alarms.",
      technologies: ["Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Software Engineer",
      company: "Vivial",
      companyLink: "https://www.linkedin.com/company/vivialmedia/",
      period: "May 2018 - Feb 2021",
      description: `Vivial was my first role focused on Node.js development and the first time I worked in a team that consistently followed engineering best practices, design patterns, and modern architecture principles. I was part of a team of 6–8 developers, along with QAs, a tech lead, and an architect who also acted as a mentor.`,
      more: `
      <p><strong>Key Responsibilities & Projects</strong></p>
      <ul class="pl-5 list-disc">
        <li>Contributed to a large-scale migration project, transitioning a legacy PHP monolith to a Node.js microservices architecture with zero downtime.</li>
        <li>Developed and maintained REST APIs for multiple services.</li>
        <li>Worked on a Backend-for-Frontend (BFF) layer used by various internal applications.</li>
        <li>Helped implement microservices for Authentication and Authorization, treated as independent services.</li>
        <li>Built features to support a content marketing platform that improved local businesses' online presence through SEO-optimized content and indexing.</li>
        <li>Used ElasticSearch to index and serve content for internal search functionality.</li>
      </ul>

<p><strong>Technical Stack</strong></p>
<ul class="pl-5 list-disc">
  <li>Node.js, PostgreSQL, ElasticSearch.</li>
  <li>AWS SQS for message queues (e.g., high-priority vs. low-priority processing).</li>
  <li>Functional programming approach throughout the codebase.</li>
  <li>Microservice communication and orchestration based on clean separation of responsibilities.</li>
</ul>

<p><strong>Notable Contributions</strong></p>
<ul class="pl-5 list-disc">
  <li>Led a solo project to build a data migration tool:</li>
    <ul class="pl-5 list-disc">
      <li>Created a Node.js script that pulled data from the old database.</li>
      <li>Transformed the data according to new business rules.</li>
      <li>Inserted data into the new system by making efficient API calls to the new services.</li>
      <li>This project deepened my knowledge of PostgreSQL and helped enforce consistent business logic during data transition.</li>
    </ul>
</ul>

<p><strong>Team & Growth</strong></p>
<ul class="pl-5 list-disc">
  <li>Coming from a C#/.NET background with experience in OOP, this role marked a significant shift to functional programming, which I came to prefer and appreciate.</li>
  <li>The team culture emphasized code quality, mentoring, and continuous learning, which helped me grow rapidly as a developer.</li>
</ul>`,
      technologies: [
        "Node.js",
        "AWS",
        "PostgreSQL",
        "ElasticSearch",
        "SQS Queues",
        "Docker",
        "CircleCI",
        "Jest",
        "JWT",
      ],
    },
    {
      title: "Software Developer Jr",
      company: "Vivial",
      companyLink: "https://www.linkedin.com/company/vivialmedia/",
      period: "Sep 2015 - May 2018",
      description:
        "Develop and provide support for web and desktop applications with a team of developers using technologies such as C#, Javascript, Web MVC, CSS, HTML, Microsoft SQL Server, Oracle & more.",
      technologies: ["C#", "SQL", ".NET", "Oracle"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
