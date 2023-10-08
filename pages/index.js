import GridCard from "@/components/GridCard";
import { Inter } from "next/font/google";
import { CARDS_DATA } from "@/data/cards.data";
import useStore from "@/store/store";
import Preview from "../components/preview";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { previewData } = useStore();

  return (
    <main className={`${inter.className}`}>
      <div className="md:grid md:grid-cols-3 md:place-content-center">
        {CARDS_DATA.map((data) => {
          return <GridCard {...data} />;
        })}
      </div>
      {<Preview {...previewData} />}
    </main>
  );
}
