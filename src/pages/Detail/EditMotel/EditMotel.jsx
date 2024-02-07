import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as provinceService from "~/services/provinceService";
import * as motelService from "~/services/motelService";
import EmptyClient from "~/components/EmptyClient";
import { ToastContainer, toast } from "react-toastify";

function EditMotel() {
  const token = localStorage.token;
  const { id } = useParams();
  const [data, setData] = useState({});
  const [address, setAddress] = useState({ province: "", district: "" });
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);

  useEffect(() => {
    motelService
      .getDetailMotel(id)
      .then((motel) => {
        setData(motel.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
    if (address.province) {
      provinceService
        .getDistrict(handleSplit(address.province))
        .then((result) => {
          setDistrict(result.districts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [address.province]);

  const handleSplit = (e) => {
    return e.split(",")[0];
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      ...data,
      province: address.province.split(",")[1],
      district: address.district,
    };

    motelService
      .editModel({ data: newData, id: id })
      .then((result) => {
        if (result.status === 200) {
          toast.success("Sửa trọ thành công  ", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    if (address.province !== newData.province) {
      newData.district = "";
    }
    setData(newData);
  };

  const handleAddress = (e) => {
    const newData = { ...address };
    newData[e.target.name] = e.target.value;
    setAddress({ province: newData.province, district: newData.district });
  };

  if (!token) {
    return (
      <EmptyClient title="Chưa đăng nhập" description="Vui lòng đăng nhập!" />
    );
  }

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col items-center lg:w-2/4 w-full md:items-start"
    >
      <p className="text-2xl font-medium">Thông tin phòng trọ cho thuê</p>
      <input
        type="text"
        className=" 
          border 
          border-purple-300 
          px-4 
          py-4 
          text-2xl 
          w-3/4
          my-4
          focus:border-blue-400
          focus:outline-none
          rounded-3xl
          lg:w-full"
        placeholder="Tiêu đề ..."
        required
        name="title"
        value={data.title || ""}
        onChange={(e) => handleData(e)}
      />
      <input
        type="text"
        className=" 
          border 
          border-purple-300 
          px-4 
          py-4 
          text-2xl 
          w-3/4
          my-4
          focus:border-blue-400
          focus:outline-none
          rounded-3xl
          lg:w-full"
        placeholder="Mô tả ..."
        required
        name="description"
        value={data.description || ""}
        onChange={(e) => handleData(e)}
      />

      <input
        type="Number"
        className=" 
          border 
          border-purple-300 
          px-4 
          py-4 
          text-2xl 
          w-3/4
          my-4
          focus:border-blue-400
          focus:outline-none
          rounded-3xl
          lg:w-full"
        placeholder="Giá phòng ..."
        required
        name="price"
        min={0}
        value={data.price || ""}
        onChange={(e) => handleAddress(e)}
      />

      <select
        className=" border 
        border-purple-300 
        px-4 
        py-4 
        text-2xl 
        w-3/4
        my-4
        focus:border-blue-400
        focus:outline-none
        rounded-3xl
        lg:w-full"
        name="province"
        required
        onChange={(e) => handleAddress(e)}
      >
        <option value="">Chọn tỉnh thành </option>
        {province.map((data) => (
          <option key={data.code} value={[data.code, data.name]}>
            {data.name}
          </option>
        ))}
      </select>

      <select
        className="border 
        border-purple-300 
        px-4 
        py-4 
        text-2xl 
        w-3/4
        my-4
        focus:border-blue-400
        focus:outline-none
        rounded-3xl
        lg:w-full"
        name="district"
        required
        onChange={(e) => handleAddress(e)}
      >
        <option>Chọn quận huyện </option>
        {district &&
          district.map((data) => (
            <option key={data.code} value={data.name}>
              {data.name}
            </option>
          ))}
      </select>

      <select
        name="type"
        className="border 
        border-purple-300 
        px-4 
        py-4 
        text-2xl 
        w-3/4
        my-4
        focus:border-blue-400
        focus:outline-none
        rounded-3xl
        lg:w-full"
        value={data.type || ""}
        onChange={(e) => handleData(e)}
        required
      >
        <option value="">Loại phòng trọ</option>
        <option value="Trọ sinh viên">Trọ sinh viên</option>
        <option value="Chung cư mini">Chung cư mini</option>
      </select>

      <button
        className="
            mt-4
          w-3/4
          md:w-[200px]
          h-20
          hover:font-bold
          text-xl
          text-white
          border
          rounded-3xl
          bg-emerald-500 
          "
      >
        Thay đổi thông tin
      </button>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
}

export default EditMotel;
