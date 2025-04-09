import { useLocation, useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const navigator = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="bg-[#3c0000] w-full min-h-12 fixed bottom-0 left-0 flex justify-center items-center"></div>
      <div className="w-full min-h-20 fixed bottom-0 left-0 flex justify-between items-end">
        {/* Units */}
        <div
          className={`transition h-full ${
            isActive("/units") ? "w-28 scale-125" : "w-22"
          }`}
          style={isActive("/units") ? { marginBottom: `10px` } : {}}
          onClick={() => {
            navigator("/units");
          }}
        >
          <div className="w-full h-full">
            <img
              src="/img/icons/unit.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Titans */}
        <div
          className={`transition h-full ${
            isActive("/titans") ? "w-28 scale-135" : "w-24"
          }`}
          style={isActive("/titans") ? { marginBottom: `7px` } : {}}
          onClick={() => {
            navigator("/titans");
          }}
        >
          <div className="w-full h-full">
            <img
              src="/img/icons/titans.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Homepage */}
        <div
          className={`transition h-full flex flex-col justify-center items-center ${
            isActive("/") ? "w-48 scale-125" : "w-40"
          }`}
          style={isActive("/") ? { marginBottom: `7px` } : {}}
          onClick={() => {
            navigator("");
          }}
        >
          <div className="w-full h-[100%]">
            <img
              src="/img/icons/AOT Logo.webp"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full max-h-2 transparent text-1px">.</div>
        </div>

        {/* Walls */}
        <div
          className={`transition h-full ${
            isActive("/walls") ? "w-32 scale-135" : "w-28"
          }`}
          style={isActive("/walls") ? { marginBottom: `5px` } : {}}
          onClick={() => {
            navigator("/walls");
          }}
        >
          <div className="w-full h-full">
            <img
              src="/img/icons/wall.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Characters */}
        <div
          className={`transition h-full ${
            isActive("/characters") ? "w-28 scale-135" : "w-22"
          }`}
          style={isActive("/characters") ? { marginBottom: `5px` } : {}}
          onClick={() => {
            navigator("/characters");
          }}
        >
          <div className="w-full h-full">
            <img
              src="/img/icons/character.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
