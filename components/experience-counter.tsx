"use client"
import { Badge } from "@/components/ui/badge";
import { LucideClock } from "lucide-react";
import { useEffect, useState } from "react";

const EXPERIENCE_START = new Date("2015-09-15T09:00:00Z");

function getExperienceDuration() {
  const now = new Date();
  let years = now.getUTCFullYear() - EXPERIENCE_START.getUTCFullYear();
  let months = now.getUTCMonth() - EXPERIENCE_START.getUTCMonth();
  let days = now.getUTCDate() - EXPERIENCE_START.getUTCDate();
  let hours = now.getUTCHours() - EXPERIENCE_START.getUTCHours();
  let minutes = now.getUTCMinutes() - EXPERIENCE_START.getUTCMinutes();
  let seconds = now.getUTCSeconds() - EXPERIENCE_START.getUTCSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getUTCFullYear(), now.getUTCMonth(), 0);
    days += prevMonth.getUTCDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  return { years, months, days, hours, minutes, seconds };
}

const ExperienceCounter = () => {
  const [duration, setDuration] = useState<ReturnType<typeof getExperienceDuration> | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setDuration(getExperienceDuration());
    const interval = setInterval(() => {
      setDuration(getExperienceDuration());
    }, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  // Helper to pad numbers to two digits
  const pad = (n: number) => n.toString().padStart(2, "0");

  if (!hasMounted || !duration) return null;

  return (
    <span>
      With {" "}
      <Badge className="rounded-full border-none">
        <LucideClock />
        {duration.years} years, {duration.months} months, {duration.days} days and {" "}
        {pad(duration.hours)}:{pad(duration.minutes)}:{pad(duration.seconds)}
      </Badge>{" "}
    </span>
  );
};

export default ExperienceCounter; 
