import { FaHeart } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

import ImageDetail from "./ImageDetail";
import * as motelService from "~/services/motelService";
import * as favoriteService from "~/services/favoriteService";
import * as bookedService from "~/services/bookedService";
import * as authService from "~/services/authService";
import EmptyClient from "~/components/EmptyClient";
import { ToastContainer, toast } from "react-toastify";

function Detail() {
  const { id } = useParams();
  const navigator = useNavigate();
  const token = localStorage.token;

  const [data, setData] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [menu, setMenu] = useState(false);
  const [checkOwner, setCheckOwner] = useState(false);

  useEffect(() => {
    motelService
      .getDetailMotel(id)
      .then((data) => {
        setData(data.data);
        setIsBooked(data.data.status);
      })
      .catch((err) => console.log(err));

    if (token) {
      favoriteService
        .getAllFavorite()
        .then((favorite) => {
          const checkFavorite = favorite.data.filter(
            (favorite) => favorite._id === id
          );
          if (checkFavorite && checkFavorite.length > 0) {
            setIsFavorite(true);
          }
        })
        .catch((err) => console.log(err));

        authService
        .getCurrentUser()
        .then((user) => {
          if (data && data.userId._id === user.data._id) {
            setCheckOwner(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [id, token,data]);

  const addFavorite = (id) => {
    if (!token) warningLogin();
    else if (!isFavorite) {
      favoriteService
        .addFavorite({ motelId: id })
        .then(() => {
          setIsFavorite(true);
        })
        .catch((err) => console.log(err));
    } else {
      favoriteService
        .deleteFavorite({ id: id })
        .then(() => {
          setIsFavorite(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const booked = (id) => {
    if (!token) warningLogin();
    else {
      bookedService
        .booked({ motelId: id })
        .then((data) => {
          if (data.status === 200) {
            setIsBooked(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteMotel = (id) => {
    motelService
      .deleteMotel({ id: id })
      .then((motel) => {
        if (motel.status === 200) {
          navigator("/");
        }else if(motel.status === 400 ){
          toast.warn("Đang có người thuê phòng ", {
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

  const warningLogin = () => {
    toast.error("Chưa đăng nhập vui lòng đăng nhập! ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (!data) {
    return (
      <EmptyClient title="Không có dữ liệu" description="chưa có nhà trọ " />
    );
  }

  return (
    <>
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

      <div className="flex relative">
        <ImageDetail imageUrl={data.imageUrl} />
        {checkOwner && (
          <>
            <BsThreeDots
              onClick={() => setMenu(!menu)}
              className="
            text-[36px]
            md:px-4
            md:py-4
            text-white
            md:text-black
            cursor-pointer
            absolute
            right-6
            top-2"
            />

            {menu && (
              <button
                onClick={() => deleteMotel(id)}
                className="
            bg-white
            rounded-2xl
            mt-4
            absolute
            right-6
            top-10
            text-xl
            w-[150px]
            md:w-[100px]
            py-4
            px-2
            hover:bg-neutral-100
            select-none
        "
              >
                Xóa bài viết
              </button>
            )}
          </>
        )}
      </div>
      <div className="mx-10 md:ml-20">
        <Link
          to={`/user/${data.userId._id}`}
          className="flex items-center justify-end"
        >
          <p>{data.userId.fullName}</p>
          <img
            src={data.userId.imageUrl}
            alt={data.userId.fullName}
            className="w-[40px] h-[40px] rounded-full ml-4"
          />
        </Link>
        <div className="flex justify-between items-center mt-10">
          <div className="text-2xl font-bold ">{data.title}</div>
          <FaHeart
            onClick={() => addFavorite(id)}
            size={50}
            className={`mx-3 p-4 cursor-pointer ${
              isFavorite && "text-rose-500"
            }`}
          />
        </div>
        <div className="ml-3 text-neutral-500 font-bold">{data.type}</div>
        <div className="mt-4 text-2xl text-right font-medium text-neutral-500">
          <p>{data.price} VNĐ</p>
          {isBooked === 0 ? (
            <button
              onClick={() => booked(id)}
              className="
          border
          border-green-600
          bg-neutral-200
          w-[200px]
          h-[42px]
          mt-6
          rounded-2xl
          hover:bg-green-600
          hover:text-white
          "
            >
              Thuê phòng
            </button>
          ) : (
            <button
              className="
        border
        w-[200px]
        h-[42px]
        mt-6
        rounded-2xl
        bg-green-600
       text-white
        "
              disabled
            >
              Đã được thuê
            </button>
          )}
        </div>
        <div className="m-4">{data.description}</div>
        <div className="m-4">{data.district + " - " + data.province}</div>
      </div>
    </>
  );
}

export default Detail;
