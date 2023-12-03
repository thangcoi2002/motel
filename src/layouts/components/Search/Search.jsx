import { useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import useSearchModal from "~/hooks/useSearchModal";

function Search() {
  const searchModal = useSearchModal();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const province = params.get("province");
  const district = params.get("district");

  return (
    <div
      className="inline-flex items-center w-[500px] border border-[#dddddd] rounded-full overflow-hidden cursor-pointer"
      onClick={searchModal.onOpen}
    >
      <div className=" w-full text-xl pr-10 pl-10">
        {province ? district +  " - " + province : "Tìm kiếm theo thành phố"}
      </div>
      <div className="flex justify-center items-center w-[64px] h-[50px] opacity-50">
        <CiSearch size={24}/>
      </div>
    </div>
  );
}

export default Search;
