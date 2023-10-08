export default function Overlay() {
  return (
    <>
      <div className="overlay-1 opacity-0 w-[100vw] h-[50vh] fixed z-[10] top-0 bg-black pointer-events-none" />
      <div className="overlay-2 opacity-0 w-[100vw] h-[50vh] fixed z-[10] bottom-0 bg-black pointer-events-none" />
    </>
  );
}
