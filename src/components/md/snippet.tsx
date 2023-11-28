export default function Snippet({ children }: { children: string }) {
  return (
    <code className="dark:bg-zinc-900 dark:text-zinc-400 bg-zinc-200 text-zinc-700 px-2 rounded-md text-sm py-1 whitespace-nowrap font-medium before:hidden after:hidden">
      {children}
    </code>
  );
}
