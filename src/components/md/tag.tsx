export default function HTMLTag({ children }: { children: string }) {
  return (
    <span className="dark:bg-zinc-800 bg-zinc-200 px-2 rounded-md text-sm py-1 text-sky-400 mx-[2px] font-semibold">
      {"<"}
      {children}
      {">"}
    </span>
  );
}
