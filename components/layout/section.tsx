import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("py-10 px-4 md:py-20", className)}>
      {children}
    </section>
  );
};
