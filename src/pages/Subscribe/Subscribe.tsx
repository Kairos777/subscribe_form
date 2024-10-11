import React, { useState } from "react";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import SubscribeForm from "../../components/SubscribeForm";
import { SubscribeContent, SubscribeWrapper } from "./styles";

const SubscribePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <SubscribeWrapper>
      <h3>Subscribe page</h3>
      <SubscribeContent>
        <Button onClick={showModal}>Subscribe</Button>
        <Modal isOpen={isOpen} onClose={hideModal}>
          <SubscribeForm />
        </Modal>
      </SubscribeContent>
    </SubscribeWrapper>
  );
};

export default SubscribePage;
