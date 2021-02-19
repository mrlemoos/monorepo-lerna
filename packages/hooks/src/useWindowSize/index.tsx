import React from "react";

import { DynamicInfo, WindowMeasure } from "./index.d";

const useWindowSize = () => {
  const [dynamicInfo, updateDynamicInfo] = React.useState<DynamicInfo>({
    measures: { width: 0, height: 0 },
  });

  const hasClientSide = () => typeof window !== "undefined";

  const measures: () => WindowMeasure = () => ({
    width: hasClientSide() ? window.innerWidth : 0,
    height: hasClientSide() ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    if (hasClientSide()) {
      const onResize = () =>
        updateDynamicInfo((p) => ({ ...p, measures: { ...measures() } }));

      !!window &&
        typeof window.addEventListener === "function" &&
        window.addEventListener("resize", onResize);

      return () => {
        if (!!window && typeof window.removeEventListener == "function") {
          return window.removeEventListener("resize", onResize);
        }
      };
    }
  }, []);

  return dynamicInfo.measures;
};

export default useWindowSize;
