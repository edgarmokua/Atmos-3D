import React from "react";
import { Text } from "@react-three/drei";

const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY={"bottom"}
          fontSize={0.22}
          maxWidth={2.5}
          lineHeight={1}
          font={"./font/PlayfairDisplay-Regular.ttf"}
        >
          {title}
        </Text>
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        maxWidth={2.5}
        font={"./font/PlayfairDisplay-SemiBold.ttf"}
      >
        {subtitle}
      </Text>
    </group>
  );
};

export default TextSection;
