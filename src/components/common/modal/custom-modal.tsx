import { useContext } from "react";
// import { Button, Modal } from "antd";
import {MDBModal} from "mdb-react-ui-kit";
import {Modal, Button} from "react-bootstrap";


import { ModalContext } from "lib/context/modal";



const CustomModal = () => {
    const { visible, modalTitle, modalContent, handleModal }: any =
        useContext(ModalContext);

    return (
        visible && (
            <Modal
                title={modalTitle}
                visible={visible}
                onCancel={() => handleModal()}
                footer={[
                    <Button key="back" onClick={() => handleModal()}>
                        Хаах
                    </Button>,
                ]}
                centered
                width={1000}
            >
                {modalContent}
            </Modal>
        )
    );
};

export default CustomModal;
