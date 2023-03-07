import classNames from "classnames";
import React from "react";
import { useConnection } from "../../hooks";
import Icon from "../../icons";

type DefaultLayoutProps = {
  children?: any;
  header?: any;
  navbar?: any;
};

export const DefaultLayout = ({
  children,
  header,
  navbar,
}: DefaultLayoutProps) => {
  const isOnline = useConnection();

  return (
    <div className={classNames("ui-wrapper ui-bg-gray500 ui-h-full ui-w-full")}>
      {header}
      <div
        className={classNames(
          "ui-flex ui-w-full",
          header ? "ui-mt-[64px]" : ""
        )}
      >
        {navbar}
        <div
          className={classNames(
            "ui-z-0 ui-min-h-[calc(100vh-64px)]",
            navbar ? "ui-ml-[80px]  ui-w-[calc(100%-80px)]" : "ui-w-full"
          )}
        >
          {children}
        </div>
      </div>

      {!isOnline && (
        <div className="ui-fixed ui-bottom-6 ui-left-6 ui-z-50 ui-flex ui-items-center ui-rounded-lg ui-bg-orange-500 ui-py-3 ui-px-4 ui-text-white ui-shadow-lg">
          <Icon name="wifi-off" className="ui-mr-4 ui-fill-white ui-text-2xl" />
          Vui lòng kiểm tra lại kết nối mạng
        </div>
      )}
    </div>
  );
};
