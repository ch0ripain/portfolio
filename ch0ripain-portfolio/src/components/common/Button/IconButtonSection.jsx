export default function IconButtonSection({ children }) {
  return (
    <div className="mt-10 flex h-10 w-40 animate-fade-in-up flex-row items-center justify-evenly rounded-full bg-white/5 backdrop-blur-sm animate-delay-[2s] animate-duration-1000">
      {children}
    </div>
  );
}
