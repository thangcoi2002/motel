import { useEffect, useState } from "react";
import Button from "~/components/Button";
import { CloseIcon } from "../Icons";

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const handleSecondaryAction = () => {
    if (!secondaryAction) {
      return;
    }

    secondaryAction();
  };
  

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-500
            h-full
            ${showModal ? "translate-x-0" : "translate-x-full"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              <div
                className="
                flex 
                items-center 
                p-4
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <div className="pt-4 pb-4 text-2xl font-semibold">{title}</div>
                <button
                  className="
                    p-4
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-4
                  "
                  onClick={handleClose}
                >
                  <CloseIcon />
                </button>
              </div>
              {/*body*/}
              <div className=" p-6">{body}</div>
              {/*footer*/}
              <div className="inline-flex float-right text-xl gap-2 p-4">
                <Button onClick={handleSubmit} label={actionLabel} />
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    onClick={handleSecondaryAction}
                    label={secondaryActionLabel}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
