export default function HomeButtonSection({ children }) {
  return (
    <div className="mt-5 flex h-fit w-fit animate-fade-in flex-row items-center justify-evenly space-x-2 rounded-full p-2 backdrop-blur-sm animate-delay-[2.4s] animate-duration-500">
      {children}
    </div>
  );
}
