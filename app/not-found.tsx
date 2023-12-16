import { FaRegFaceSadTear } from "react-icons/fa6";
export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-start flex-col">
        <h1 className="h1">
          Ops <FaRegFaceSadTear />
        </h1>
        <h1 className="h1">page not found 404!</h1>
        <p>Could not find request resource</p>
      </div>
    </div>
  );
}
