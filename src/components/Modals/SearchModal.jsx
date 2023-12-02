import { useEffect, useState } from "react";
import Modal from "~/components/Modals/Modal";
import config from "~/config";
import useSearchModal from "~/hooks/useSearchModal";
import * as provinceService from "~/services/provinceService";

function SearchModal() {
  const { isOpen, onClose } = useSearchModal();
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    provinceService
      .getProvince()
      .then((result) => {
        setProvince(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (select) {
      provinceService
        .getDistrict(select.province)
        .then((result) => {
          setDistrict(result.districts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [select]);

  const handleSelect = (e) => {
    const newData = { ...select };
    newData[e.target.name] = e.target.value;
    setSelect(newData);
  };

  console.log(select);
  const onSubmit = () => {
   if(select){
    window.location = `${config.routes.search}?province=${select.province}&district=${select.district}`;
   }
  };

  const body = (
    <div>
      <select
        className="w-full p-4 h-16 text-xl border border-[#dddddd] outline-none"
        name="province"
        onChange={(e) => handleSelect(e)}
        required
      >
        <option value=''>Chọn tỉnh thành </option>
        {province.map((data) => (
          <option key={data.code} value={data.code}>
            {data.name}
          </option>
        ))}
      </select>
      <select
        className="w-full p-4 mt-4 h-16 text-xl border border-[#dddddd] outline-none"
        name="district"
        onChange={(e) => handleSelect(e)}
      >
        <option>Chọn quận huyện </option>
        {district.map((data) => (
          <option key={data.code} value={data.code}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Tìm kiếm theo tỉnh thành"
      onSubmit={onSubmit}
      actionLabel="Tìm kiếm"
      secondaryAction={onClose}
      secondaryActionLabel="Hủy"
      body={body}
    />
  );
}

export default SearchModal;
