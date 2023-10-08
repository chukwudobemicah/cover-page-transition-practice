// "use client";
import Image from "next/image";
import useStore from "../store/store";
import usePageCover from "@/hooks/usePageCover";

export default function GridCard({
  year,
  name,
  info,
  mobileImgUrl,
  previewData,
}) {
  const { pageCover, setPageCover, setPreviewData } = useStore();
  usePageCover();

  return (
    <>
      {!pageCover && (
        <div className="w-[80%] max-w-[400px] my-8 mx-auto flex flex-col gap-3">
          <p>{year}</p>
          <p>{name}</p>
          <div className="img-container lg:w-full  lg:h-[300px]">
            <Image
              priority
              className="card-img"
              src={mobileImgUrl}
              height={250}
              width={250}
              alt="img"
            />
          </div>
          <p>{info}</p>
          <button
            onClick={() => {
              setPageCover();
              setPreviewData(previewData);
            }}
            className="py-4 px-8 border border-black/50 rounded-3xl"
          >
            view
          </button>
        </div>
      )}
    </>
  );
}
