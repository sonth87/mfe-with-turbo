import { useState } from "react";
import UserProfile from "./UserProfile";

type Props = {
  logo?: {
    src?: string;
    alt?: string;
    url?: string;
  };
  children?: React.ReactNode;
};

function Header({ logo, children }: Props) {
  return (
    <div className="ui-drop-shadow-header ui-shadow-header ui-fixed ui-top-0 ui-z-50 ui-flex ui-h-16 ui-w-full ui-justify-between ui-bg-blue-50 ui-py-4 ui-pl-8 ui-pr-6">
      <div className="ui-cursor-pointer">
        {logo?.url && (
          <a href={logo?.url}>
            <img src={logo?.src} alt={logo?.alt} className="ui-max-h-full" />
          </a>
        )}
        {!logo?.url && <img src={logo?.src} alt={logo?.alt} className="ui-max-h-full" />}
      </div>
      <div className="ui-flex">
        <div className="ui-flex ui-cursor-pointer ui-border-r">{children}</div>
        <UserProfile />
      </div>
    </div>
  );
}

export default Header;
