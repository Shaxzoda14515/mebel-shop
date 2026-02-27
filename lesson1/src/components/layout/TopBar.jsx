import CheckIcon from "../icons/CheckIcon";
import Warning from "../icons/Warning";
import DownIcon from "../icons/DownIcon";
import HeartIcon from "../icons/HeartIcon";
import UserIcon from "../icons/UserIcon";

const NAV_LINKS = ["Home", "Shop", "Products", "Pages", "About"];

const ICON_ACTIONS = [
  { id: "wishlist", icon: <HeartIcon />, label: "Wishlist" },
  { id: "account", icon: <UserIcon />, label: "Account" },
];



function TopBar() {
  return (
    <div className="w-full bg-[#272343] text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 text-sm font-light md:px-6">
        <div className="flex items-center gap-2">
          <CheckIcon />
          <p>Free shipping on all orders over $50</p>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button type="button" className="flex items-center gap-1 hover:opacity-80">
            <DownIcon />
            <span>EN</span>
          </button>

          <button type="button" className="hover:opacity-80">
            FAQs
          </button>

          <button type="button" className="flex items-center gap-1 hover:opacity-80">
            <Warning />
            <span>Need help</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TopBar