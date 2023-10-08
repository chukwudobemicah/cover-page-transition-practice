import Image from "next/image";
import useStore from "@/store/store";
import gsap from "gsap";
import usePageCover from "@/hooks/usePageCover";
import Link from "next/link";

export default function Preview() {
  usePageCover();
  const { setPageCover } = useStore();

  return (
    <div className="z-[20] relative text-white">
      <div class="preview">
        <div className="w-full relative">
          <p>BENNET</p>
        </div>
        <h2>Moulder</h2>
        <span>Alex Moulder</span>
        <span>2020</span>
        <span>Location</span>
        <p>
          And if it rains, a closed car at four. And we shall play a game of
          chess, pressing lidless eyes and waiting for a knock upon the door.
        </p>
      </div>
      <span>Material</span>
      <p>
        At the violet hour, when the eyes and back, turn upward from the desk,
        when the human engine waits.
      </p>
      <button
        className="w-12 h-3 transform text-[4rem]"
        onClick={() => setPageCover()}
      >
        {/* <Image src="/up-arrow-1.png" height={50} width={250} alt="arrow" /> */}
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
