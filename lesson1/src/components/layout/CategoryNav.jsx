
import HeartIcon from "../icons/HeartIcon";
import UserIcon from "../icons/UserIcon";
import MenuIcon from "../icons/MenuIcon";

const NAV_LINKS = ["Home", "Shop", "Products", "Pages", "About"];

const ICON_ACTIONS = [
  { id: "wishlist", icon: <HeartIcon />, label: "Wishlist" },
  { id: "account", icon: <UserIcon />, label: "Account" },
];



function CategoryNav() {
  return (
    <div className="w-full border-t border-gray-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <button
          type="button"
          className="flex w-fit items-center gap-3 rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 font-medium hover:bg-gray-200"
        >
          <MenuIcon />
          <span>All Categories</span>
        </button>

        <nav className="flex flex-wrap items-center gap-5 text-sm text-gray-700">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="hover:text-[#272343]">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default CategoryNav