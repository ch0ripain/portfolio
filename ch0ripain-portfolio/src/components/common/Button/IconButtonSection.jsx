export default function IconButtonSection({ children }) {
  return (
    <div className="mt-5 flex h-12 w-22 animate-fade-in-up flex-row items-center justify-evenly rounded-full bg-white/5 backdrop-blur-sm animate-delay-[2.4s] animate-duration-1000">
      {children}
    </div>
  );
}
