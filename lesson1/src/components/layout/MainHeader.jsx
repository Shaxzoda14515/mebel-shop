import SupportIcon from "../icons/SofaIcon";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import UserIcon from "../icons/UserIcon";

const NAV_LINKS = ["Home", "Shop", "Products", "Pages", "About"];

const ICON_ACTIONS = [
  { id: "wishlist", icon: <HeartIcon />, label: "Wishlist" },
  { id: "account", icon: <UserIcon />, label: "Account" },
];



function MainHeader() {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
      <div className="flex items-center gap-2">
        <SupportIcon />
        <p className="text-xl font-semibold text-[#272343]">Comforty</p>
      </div>

      <label className="hidden w-full max-w-md items-center justify-between rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 md:flex">
        <input
          className="w-full bg-transparent pr-3 text-sm outline-none"
          placeholder="Search here..."
          type="text"
        />
        <SearchIcon />
      </label>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 hover:bg-gray-200"
          aria-label="Open cart"
        >
          <CartIcon />
          <span className="text-sm font-medium">Cart</span>
        </button>

        {ICON_ACTIONS.map((action) => (
          <button
            key={action.id}
            type="button"
            className="rounded-xl border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200"
            aria-label={action.label}
          >
            {action.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
 
export default MainHeader