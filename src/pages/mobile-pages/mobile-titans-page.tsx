export function MobileTitansPage() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full h-auto flex">
        <div className="w-full h-auto">
          <img src="/img/Attack on Titan Characters Thumbnail.png" />
        </div>

        <div className="absolute w-40 h-auto text-center text-white font-bold right-1 top-62 text-2xl">
          Do you wanna know me ?
        </div>
      </div>

      <div className="min-h-screen w-full">
        <div
          className="bg-red-950 w-full h-auto text-center font-bold text-5xl"
          style={{ padding: `10px 0`, paddingBottom: `20px` }}
        >
          The Titans
        </div>
      </div>
    </div>
  );
}
