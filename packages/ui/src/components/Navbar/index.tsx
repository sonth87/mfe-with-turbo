import classNames from "classnames";

const Navbar = () => {
  return (
    <div
      className={classNames(
        "ui-bg-sidebar ui-group ui-fixed ui-z-40 ui-bg-white ui-p-4 ui-shadow-xl ui-ease-in-out sm:ui-block",
        "ui-h-full ui-overflow-hidden hover:ui-overflow-y-auto"
      )}
    >
      <nav className="ui-w-12 ui-space-y-3 ui-duration-300 group-hover:ui-w-64">
        <div>Menu 1</div>
      </nav>
    </div>
  );
};

export default Navbar;
