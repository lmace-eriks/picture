import React from "react";

import { default as s } from "./styles.css";

type PictureProps = {
  desktopImage: string
  mobileImage: string
  desktopSize: string
  mobileSize: string
  altText: string
  lazyLoading: boolean
  blockClass: string
}

const Picture = ({ desktopImage, mobileImage, altText, lazyLoading, desktopSize, mobileSize, blockClass }: PictureProps) => {

  const bc = (className: string, modifier: string = blockClass) => `${className} ${className}--${modifier}`;

  const desktopWidth = Number(desktopSize.split(" ")[0]);
  const desktopHeight = Number(desktopSize.split(" ")[1]);
  const mobileWidth = Number(mobileSize.split(" ")[0]);
  const mobileHeight = Number(mobileSize.split(" ")[1]);

  return (
    <picture>
      <source media="(min-width:1026px)" srcSet={desktopImage} width={desktopWidth} height={desktopHeight} />
      <source media="(max-width:1025px)" srcSet={mobileImage} width={mobileWidth} height={mobileHeight} />
      {/* @ts-ignore  - fetchPriority */}
      <img src={mobileImage} alt={altText} loading={lazyLoading ? "lazy" : "eager"} fetchPriority={lazyLoading ? "auto" : "high"} className={bc(s.image)} />
    </picture>
  )
}


Picture.schema = {
  title: "Picture",
  description: "",
  type: "object",
  properties: {
    desktopImage: {
      title: "Desktop Image",
      type: "string",
      widget: { "ui:widget": "image-uploader" }
    },
    desktopSize: {
      title: "Desktop Dimentions",
      description: "Width and Height in px separated by a space.",
      type: "string",
    },
    mobileImage: {
      title: "Mobile Image",
      type: "string",
      widget: { "ui:widget": "image-uploader" }
    },
    mobileSize: {
      title: "Mobile Dimentions",
      description: "Width and Height in px separated by a space.",
      type: "string",
    },
    altText: {
      title: "Alt Text",
      type: "string",
      description: "Text that best describes both images.",
      widget: { "ui:widget": "textarea" }
    }
  }
};

export default Picture


