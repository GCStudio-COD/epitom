import HomeAbout from "@/src/widgets/HomeAbout";
import HomeBanner from "@/src/widgets/HomeBanner";
import ClinicalServices from "@/src/widgets/ClinicalServices";
import EpitomeNetwork from "@/src/widgets/EpitomeNetwork";
import Approach from "@/src/widgets/Approach";

import React from "react";

interface WidgetProps {
  widget_type: string;
  [key: string]: unknown;
}

interface BlockProps {
  widget: WidgetProps;
}

const Block: React.FC<BlockProps> = ({ widget }) => {
  switch (widget.widget_type) {
    case "HomeBanner":
      return <HomeBanner {...widget} />;
    case "HomeAbout":
      return <HomeAbout />;
    case "ClinicalServices":
      return <ClinicalServices />;
    case "Approach":
      return <Approach />;
    case "EpitomeNetwork":
      return <EpitomeNetwork />;
    default:
      return <div>Unknown Widget: {widget.widget_type}</div>;
  }
};

export default Block;
