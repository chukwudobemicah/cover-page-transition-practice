import Image from "next/image";
import useStore from "@/store/store";
import gsap from "gsap";
import usePageCover from "@/hooks/usePageCover";

export default function Preview({ year, name, info, info2, desktopImgUrl }) {
  usePageCover();
  const { pageCover, setPageCover } = useStore();

  return (
    <>
      {pageCover && (
        <div className="z-[20] w-[80%] pt-12 mx-auto relative text-white overflow-hidden">
          <div className="absolute hidden lg:block left-[-20%] w-[150%] overlay-3 bg-black h-[300px] z-[20] pointer-events-none" />
          <div className="mx-auto w-full relative overflow-hidden">
            <p className="animate-text lg:absolute left-[7%] top-[-9%] lg:text-[12rem]">
              {name}
            </p>
            <div className="h-[250px] hidden lg:block mx-auto w-full">
              <Image
                priority
                src={desktopImgUrl}
                className="object-cover"
                height={50}
                width={400}
              ></Image>
            </div>
          </div>
          <div className="flex gap-4 justify-between w-full mt-12">
            <p className="max-w-[400px]">{info}</p>
            <p className="max-w-[400px]">{info2}</p>
          </div>
          <button
            className="w-12 h-3 transform text-[4rem]"
            onClick={() => setPageCover()}
          >
            Back
          </button>
        </div>
      )}
    </>
  );
}
