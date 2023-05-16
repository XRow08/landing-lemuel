import React from "react";

export function ModerationIcon() {
  return (
    <svg
      width="95"
      height="95"
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="96" height="96" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_9_1900" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_9_1900"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
