export default function Highlight({ children }: { children: string }) {
  return (
    <span className="dark:bg-zinc-800 dark:text-zinc-200 bg-zinc-200 text-zinc-700 px-2 rounded-md text-sm py-1">
      {children}
    </span>
  );
}
