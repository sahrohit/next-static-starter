"use client";

import useContactModal from "../store/use-contact-modal";
import Modal from "./modal";

const ContactModal = () => {
  const contactModal = useContactModal();

  return (
    <Modal showModal={contactModal.isOpen} setShowModal={contactModal.onClose}>
      <p>A Form</p>
    </Modal>
  );
};

export default ContactModal;
