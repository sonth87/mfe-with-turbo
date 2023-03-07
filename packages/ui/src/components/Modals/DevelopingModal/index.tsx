
import { Modal } from "antd";

type ModalPorps = {
  isOpenModal: boolean;
  handleCloseModal?: () => void;
};

function DeveloppingModal({ isOpenModal, handleCloseModal }: ModalPorps) {
  return (
    <Modal
      open={isOpenModal}
      footer={null}
      onCancel={() => handleCloseModal?.()}
    >
      <div className="ui-relative ui-mx-6 ui-mt-6 ui-flex ui-w-auto ui-flex-col ui-items-center ui-justify-center">
        <div role="banner">
          <img src="../icon/new_developing.svg" alt="icon"></img>
        </div>
        <div className="ui-mt-4">
          <h1
            role="main"
            className="ui-text-black500 ui-text-xl ui-font-semibold"
          >
            Tính năng sắp ra mắt
          </h1>
        </div>
        <button
          onClick={() => handleCloseModal?.()}
          className="xs:ui-w-full ui-text-primarya500  ui-bg-primarya200 hover:ui-bg-primarya300 ui-rounded-lg ui-py-2 ui-px-4 ui-text-center ui-font-medium  focus:ui-outline-none focus:ui-ring-2"
        >
          Đồng ý
        </button>
      </div>
    </Modal>
  );
}
export default DeveloppingModal;
