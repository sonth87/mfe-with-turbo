import WifiOffIcon from "./WifiOffIcon";

export const iconType = {
  "wifi-off": WifiOffIcon,
};

type IconType = typeof iconType;
export type IconName = keyof IconType;

const Icon = ({
  name,
  className = "text-ink300",
}: {
  name: IconName;
  className?: string;
}) => {
  const CIcon = iconType?.[name];
  return CIcon ? <CIcon className={className} /> : null;
};

export default Icon;
