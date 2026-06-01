import { log } from "console";
import WidgetBlocks from "../utilities/WidgetBlock";
import nextFetch from "../utilities/nextFetch";

export async function generateMetadata({ params }: { params: any }) {
  const data = await nextFetch(`api/general/homepage`);
  return {
    title: data?.data?.seo?.metaTitle,
    description: data?.data?.seo?.metaDescription,
    manifest: "/manifest.json",
    icons: {
      apple: "/icon.png",
    },
    openGraph: {
      images: data?.data?.seo?.metaImage?.url?.url,
    },
  };
}



export default async function Home() {
  const data = await nextFetch("api/general/homepage");




  return (
    <main>
      {data && (
        <WidgetBlocks widgets={data?.data?.widgets}></WidgetBlocks>
      )}
    </main>
  );
}
