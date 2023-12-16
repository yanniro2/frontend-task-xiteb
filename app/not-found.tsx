import { FaRegFaceSadTear } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 lg:w-auto w-full flex items-center justify-center">
          Ops <FaRegFaceSadTear />
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2">
          Page not found (404)!
        </h1>
        <p className="text-base md:text-lg lg:text-xl">
          Could not find requested resource
        </p>
      </div>
    </div>
  );
}
