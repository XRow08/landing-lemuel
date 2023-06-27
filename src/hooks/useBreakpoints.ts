import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery("(max-width: 639px)"),
    isSm: useMediaQuery("(min-width: 640px) and (max-width: 767px)"),
    isMd: useMediaQuery("(min-width: 768px) and (max-width: 1023px)"),
    isLg: useMediaQuery("(min-width: 1024px)"),
    active: "xs",
  };
  if (breakpoints.isXs) breakpoints.active = "xs";
  if (breakpoints.isSm) breakpoints.active = "sm";
  if (breakpoints.isMd) breakpoints.active = "md";
  if (breakpoints.isLg) breakpoints.active = "lg";
  return breakpoints;
}
