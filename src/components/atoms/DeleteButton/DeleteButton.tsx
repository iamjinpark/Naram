import { useState } from 'react';
import Modal from 'react-modal';

import {
  StyledDeleteButton,
  StyledModalButton,
  StyledModalButtonWrapper,
  StyledModalTextWrapper,
} from '@/styles/components/Board/BoardDetail';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px 70px',
    borderRadius: '24px',
    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
    border: 'none',
  },
};

function DeleteButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    onDelete(); // 삭제 함수 생성해서 여기에 추가해주시면 됩니다 to 진성, 경화
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledDeleteButton onClick={() => setModalOpen(true)}>삭제하기</StyledDeleteButton>
      {modalOpen && (
        <Modal
          isOpen={true}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={false}
        >
          <StyledModalTextWrapper>
            <p className="ModalText">정말로 삭제하시겠습니까?</p>
            <p className="ModalSubText">(삭제 시 게시물을 되돌릴 수 없습니다)</p>
          </StyledModalTextWrapper>
          <StyledModalButtonWrapper>
            <StyledModalButton onClick={handleDelete}>삭제</StyledModalButton>
            <StyledModalButton onClick={handleCancel} background="#D1D1D1" color="black">
              취소
            </StyledModalButton>
          </StyledModalButtonWrapper>
        </Modal>
      )}
    </>
  );
}

export default DeleteButton;
