import styled from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  /* Use opacity and visibility for the overlay */
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export const ModalContent = styled.div<{ isOpen: boolean }>`
  background: white;
  padding: 20px;
  width: 50%;
  height: 50%;
  min-width: 300px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);

  /* Scale and opacity for modal content */
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0.9)")};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`;
