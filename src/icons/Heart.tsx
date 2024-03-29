import * as React from "react";

export interface SVGProps {
  title: string;
  color?: string;
}

const SvgHeart = ( props: SVGProps ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 612 612"   
    xmlSpace="preserve"
    aria-labelledby={props.title}   
  >
    {props.title ? <title id={props.title}>
      {props.title}
    </title> : null}
    <path d="M459 18.075c-63.743 0-111.977 37.409-153 76.5-39.091-41.482-89.256-76.5-153-76.5-89.773 0-153 77.188-153 161.358 0 45.154 18.494 77.686 38.747 108.228l237.781 285.077c26.699 28.248 31.729 28.248 58.427 0l238.316-285.077C597.082 257.119 612 224.587 612 179.433c0-84.169-63.228-161.358-153-161.358zm76.5 261.669L306 553.575 76.5 278.615c-27.444-38.154-38.25-63.896-38.25-99.182 0-65.752 46.952-124.944 114.75-125.499 55.769-.459 118.977 56.495 153 99.431 33.125-41.444 97.231-99.431 153-99.431 66 0 114.75 59.747 114.75 125.499 0 35.286-8.549 62.94-38.25 100.311z"
    fill={props.color || "red"} />
  </svg>
);
export default SvgHeart;
