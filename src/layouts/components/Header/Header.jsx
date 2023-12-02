import Search from "~/layouts/components/Search";
import Menu from "~/layouts/components/Menu";
import SearchModal from "~/components/Modals/SearchModal";
import LoginModal from "~/components/Modals/LoginModal";
import Logo from "./Logo";
import useSearchModal from "~/hooks/useSearchModal";
import RegisterModal from "~/components/Modals/RegisterModal";

function Header() {
  const searchModal = useSearchModal();
  return (
    <div className="flex justify-between items-center pl-10 pr-10 pt-8 pb-8">
      <Logo />
      <Search />
      <Menu />

      <LoginModal />
      <RegisterModal />
      {searchModal.isOpen && <SearchModal />}
    </div>
  );
}

export default Header;
