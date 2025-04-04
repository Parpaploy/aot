import { useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const navigator = useNavigate();
  return (
    <>
      <div className="bg-[#3c0000] w-full min-h-14 fixed bottom-0 left-0 flex justify-center items-center"></div>
      <div className="w-full min-h-20 fixed bottom-0 left-0 flex justify-between items-end">
        {/* Units */}
        <div
          className="w-22 h-full"
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
          className="w-24 h-full"
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
          className="w-40 h-full flex flex-col justify-center items-center"
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
          className="w-28 h-full"
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
          className="w-22 h-full"
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
