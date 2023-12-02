import Search from "~/layouts/components/Search";
import Menu from "~/layouts/components/Menu";
import SearchModal from "~/components/Modals/SearchModal";
import Logo from "./Logo";
import useSearchModal from "~/hooks/useSearchModal";
import Modal from "~/components/Modals/Modal";

function Header() {
  const { isOpen } = useSearchModal();
  return (
    <div className="flex justify-between items-center pl-10 pr-10 pt-8 pb-8">
      <Logo />
      <Search />
      <Menu />
      
      {isOpen && <SearchModal />}
    </div>
  );
}

export default Header;
