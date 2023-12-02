import { useEffect, useState } from "react";
import { SearchIcon } from "~/components/Icons";
import useSearchModal from "~/hooks/useSearchModal";
import * as provinceService from "~/services/provinceService";

function Search() {
  const { onOpen } = useSearchModal();
  const [titleSearch, setTitleSearch] = useState("");
  const params = new URLSearchParams(window.location.search);
  const idDistrict = params.get("district");

  useEffect(() => {
    if (idDistrict && idDistrict !== "") {
      provinceService.searchDistrict(idDistrict).then((data) => {
        setTitleSearch(data);
      });
    } else {
      setTitleSearch("Tìm kiếm theo thành phố");
    }
  }, []);

  return (
    <div
      className="inline-flex items-center w-[500px] border border-[#dddddd] rounded-full overflow-hidden cursor-pointer"
      onClick={onOpen}
    >
      <div className=" w-full text-xl pr-10 pl-10">
        {titleSearch.name || titleSearch}
      </div>
      <div className="flex justify-center items-center w-[64px] h-[50px] opacity-50">
        <SearchIcon className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
}

export default Search;
