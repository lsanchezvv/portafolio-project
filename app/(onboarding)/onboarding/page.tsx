'use client';

import { Separator } from "@radix-ui/react-separator";
import { CalendarDays, Send, Workflow, BookCopy, CheckCircle, PackageCheck, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    icon: <CalendarDays className="w-6 h-6 text-blue-600" />,
    title: "Initial Call",
    description: "Book a 30-min intro call to align on your project vision, target users, goals, timeline, and budget.",
    link: "https://calendly.com/luisanz-duck/30min",
    buttonText: "Book Now",
  },
  {
    icon: <Workflow className="w-6 h-6 text-green-600" />,
    title: "Define Scope & Deliverables",
    description: "You'll receive a written scope with features, priorities, tech recommendations, and milestone timeline."
  },
  {
    icon: <BookCopy className="w-6 h-6 text-yellow-600" />,
    title: "Project Kick-off",
    description: "We’ll set up Trello for tracking and agree on tools + communication channels (Slack, Email, etc)."
  },
  {
    icon: <Send className="w-6 h-6 text-indigo-600" />,
    title: "Iterative Development",
    description: "I share updates every 2–3 days and deploy previews (e.g., Vercel) for feedback on each feature."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
    title: "Milestone Reviews",
    description: "We review each milestone together — adjust, approve, and move to the next phase."
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-teal-600" />,
    title: "Final Delivery & Handover",
    description: "You'll receive the source code, documentation, access credentials, and optional walkthrough call."
  },
  {
    icon: <Wrench className="w-6 h-6 text-red-500" />,
    title: "Ongoing Support (Optional)",
    description: "Available for maintenance, bug fixes, or new features — tailored to your needs."
  },
];

export default function OnboardingPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        🧭 Client Onboarding Guide
      </h1>
      <p className="text-muted-foreground text-lg mb-8">
        A step-by-step look at how we’ll work together — from the first call to launch (and beyond).
      </p>

      <Separator className="my-6" />

      <div className="space-y-6">
        {steps.map((step, index) => (
          <Card key={index} className="p-4">
            <CardContent className="flex items-start gap-4">
              <div className="flex-shrink-0">{step.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-2">{step.description}</p>
                {step.link && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={step.link} target="_blank" rel="noopener noreferrer">
                      {step.buttonText || "Learn More"}
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Ready to kick things off?
        </p>
        <Button asChild size="lg">
          <Link href="https://calendly.com/luisanz-duck/30min" target="_blank" rel="noopener noreferrer">
            📅 Schedule an Intro Call
          </Link>
        </Button>
      </div>

      <div className="mt-30 text-center">
        <Button asChild variant="secondary" size="lg">
          <Link href="/">
            Go to Home page
          </Link>
        </Button>
      </div>
    </div>
  );
}
