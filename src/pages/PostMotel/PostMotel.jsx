import { useEffect, useState } from "react";

import * as provinceService from "~/services/provinceService";
import * as motelService from "~/services/motelService";
import EmptyClient from "~/components/EmptyClient";
import { ToastContainer, toast } from "react-toastify";

function PostMotel() {
  const token = localStorage.token;

  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    province: "",
    district: "",
    type: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);

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

  const handleSplit = (e) => {
    return e.split(",")[0];
  };

  useEffect(() => {
    if (data.province) {
      provinceService
        .getDistrict(handleSplit(data.province))
        .then((result) => {
          setDistrict(result.districts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [data]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("province", data.province);
    formData.append("district", data.district);
    formData.append("type", data.type);

    if (data.imageUrl) {
      for (let i = 0; i < data.imageUrl.length; i++) {
        formData.append("images", data.imageUrl[i]);
      }
    }
    try {
      await motelService
        .postMotel({ data: formData })
        .then((motel) => {
          if (motel.status === 200) {
            toast.success("Đăng phòng trọ thành công  ", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setLoading(false);
          } else if (motel.status === 400) {
            toast.error("Thông tin nhập vào chưa chính xác", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setLoading(false);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    if (data.province !== newData.province) {
      newData.district = "";
    }
    setData(newData);
  };

  const handleImage = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.files;
    setData(newData);
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
        onChange={(e) => handleData(e)}
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
        onChange={(e) => handleData(e)}
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
        onChange={(e) => handleData(e)}
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
        onChange={(e) => handleData(e)}
        required
      >
        <option value="">Loại phòng trọ</option>
        <option value="Trọ sinh viên">Trọ sinh viên</option>
        <option value="Chung cư mini">Chung cư mini</option>
      </select>

      <input
        type="file"
        name="imageUrl"
        className="
        px-4 
        py-4 
        text-2xl 
        w-3/4
        my-4
        rounded-3xl
        lg:w-full"
        onChange={(e) => handleImage(e)}
        accept="image/png,image/jpeg"
        multiple
        // required
        id="avatar"
      />
      <button
        className="
            mt-4
          w-3/4
          md:w-[200px]
          h-20
          hover:font-bold
          text-xl
          border
          rounded-3xl
          bg-emerald-500 
          "
      >
        {loading ? "Đang tải ..." : "Đăng phòng trọ"}
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

export default PostMotel;
