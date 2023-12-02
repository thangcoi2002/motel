import { SearchIcon } from "~/components/Icons";
import useSearchModal from "~/hooks/useSearchModal";

function Search() {
  const searchModal = useSearchModal();
  const params = new URLSearchParams(window.location.search);
  const province = params.get("province");
  const district = params.get("district");

  return (
    <div
      className="inline-flex items-center w-[500px] border border-[#dddddd] rounded-full overflow-hidden cursor-pointer"
      onClick={searchModal.onOpen}
    >
      <div className=" w-full text-xl pr-10 pl-10">
        {province && district
          ? province + " - " + district
          : "Tìm kiếm theo thành phố"}
      </div>
      <div className="flex justify-center items-center w-[64px] h-[50px] opacity-50">
        <SearchIcon className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}

export default Search;
