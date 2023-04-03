import { useEffect, useState } from "react";

const useIsModalOpen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = (): void => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  return { isModalOpen, modalHandler };
};

export default useIsModalOpen;
