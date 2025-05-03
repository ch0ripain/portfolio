export default function IconButtonSection({ children }) {
  return (
    <div className="mt-10 flex h-10 w-40 animate-[fadeIn_3s_ease-in-out] flex-row items-center justify-evenly rounded-full bg-white/5">
      {children}
    </div>
  );
}
