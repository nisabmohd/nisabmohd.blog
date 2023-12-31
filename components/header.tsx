import { cn } from "@/lib/utils";

type HeaderProps = {
  title: string;
  description?: string;
  sm?: boolean;
  top?: string;
};

export default function Header({
  description,
  title,
  sm = false,
  top,
}: HeaderProps) {
  return (
    <div className="flex flex-col gap-3 border-b-[1px] pb-7 mb-2">
      {top && <p className="text-center text-muted-foreground -mb-2">{top}</p>}
      {sm ? (
        <h2 className="font-bold text-center md:text-4xl sm:text:4xl text-3xl">
          {title}
        </h2>
      ) : (
        <h2 className="font-bold md:text-4xl sm:text:4xl text-3xl">{title}</h2>
      )}
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
