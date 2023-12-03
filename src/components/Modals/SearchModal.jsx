import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "~/components/Modals/Modal";
import config from "~/config";
import useSearchModal from "~/hooks/useSearchModal";
import * as provinceService from "~/services/provinceService";

function SearchModal() {
  const searchModal = useSearchModal();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");

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

  const handleCodeName = (data) => {
    return data.split(",");
  };

  useEffect(() => {
    if (select) {
      provinceService
        .getDistrict(handleCodeName(select.province)[0])
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
    if (select.province !== newData.province) {
      newData.district = "";
    }

    setSelect(newData);
  };

  const onSubmit = () => {
    if (select.province && select.district && type === null) {
      navigate(
        `${config.routes.search}?province=${
          handleCodeName(select.province)[1]
        }&district=${select.district}`
      );
      searchModal.onClose();
    }
    navigate(
      `?type=${type}&province=${handleCodeName(select.province)[1]}&district=${
        select.district
      }`
    );
    searchModal.onClose();
  };

  const body = (
    <div>
      <select
        className="w-full p-4 h-16 text-xl border border-[#dddddd] outline-none"
        name="province"
        required
        onChange={(e) => handleSelect(e)}
      >
        <option value="">Chọn tỉnh thành </option>
        {province.map((data) => (
          <option key={data.code} value={[data.code, data.name]}>
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
          <option key={data.code} value={data.name}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      title="Tìm kiếm theo tỉnh thành"
      onSubmit={onSubmit}
      actionLabel="Tìm kiếm"
      secondaryAction={searchModal.onClose}
      secondaryActionLabel="Hủy"
      body={body}
    />
  );
}

export default SearchModal;
