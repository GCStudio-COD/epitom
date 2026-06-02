import nextFetch from "../utilities/nextFetch";
import HomeBanner from "@/src/widgets/HomeBanner";
import HomeAbout from "@/src/widgets/HomeAbout";
import ClinicalServices from "@/src/widgets/ClinicalServices";
import Approach from "@/src/widgets/Approach";
import EpitomeNetwork from "@/src/widgets/EpitomeNetwork";
import MediaEvents from "@/src/widgets/MediaEvents";
import OurTeam from "@/src/widgets/OurTeam";
import GradientPromo from "@/src/widgets/GradientPromo";

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
  const widgets = data?.data?.widgets || [];
  const bannerWidget = widgets.find((w: any) => w.widget_type === "HomeBanner");

  return (
    <main>
      {/* WidgetBlocks dynamically rendered widgets hidden as requested */}
      {/* {data && (
        <WidgetBlocks widgets={data?.data?.widgets}></WidgetBlocks>
      )} */}

      <div className="relative w-full z-0">
        <HomeBanner data={bannerWidget?.data} />
        <HomeAbout />
      </div>
      <ClinicalServices />
      <GradientPromo />
      <Approach />
      <EpitomeNetwork />
      <OurTeam />
      <MediaEvents />

    </main>
  );
}

