export default function IconButtonSection({ children }) {
  return (
    <div className="mt-5 flex h-12 w-22 animate-fade-in flex-row items-center justify-evenly rounded-full backdrop-blur-sm animate-delay-[2.4s] animate-duration-500">
      {children}
    </div>
  );
}
