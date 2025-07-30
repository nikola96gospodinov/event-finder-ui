import { Section } from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Search, Mail, LucideIcon } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <Section className="bg-white/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2 md:mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-purple-800 max-w-2xl mx-auto">
            Three simple steps to get personalized event recommendations
            delivered to your inbox
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

type StepCardProps = {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const StepCard = ({
  stepNumber,
  title,
  description,
  icon: Icon,
}: StepCardProps) => {
  return (
    <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50/75 via-pink-50/75 to-indigo-50/75 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
      <CardHeader className="text-center pb-2 md:pb-4">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
        </div>
        <CardTitle className="text-xl md:text-2xl text-purple-900">
          {stepNumber}. {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-purple-800 text-md md:text-lg">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const steps = [
  {
    stepNumber: 1,
    title: "Tell Us About You",
    description:
      "Share your interests, goals, location, budget, and availability. The more we know, the better your matches will be.",
    icon: User,
  },
  {
    stepNumber: 2,
    title: "AI Finds Your Events",
    description:
      "Our AI agent searches through hundreds of events to find the perfect matches based on your unique profile and preferences.",
    icon: Search,
  },
  {
    stepNumber: 3,
    title: "Get Personalized Emails",
    description:
      "Receive curated event recommendations directly in your inbox, perfectly tailored to your interests and goals.",
    icon: Mail,
  },
];
