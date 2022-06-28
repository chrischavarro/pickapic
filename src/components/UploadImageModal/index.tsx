import { useRef, useState } from "react";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";

import Button from "../Button";
import ModalWrapper, {
  ButtonContainer,
  ModalHeader,
  FileInput,
  ImageName,
  PreviewContainer,
  ImageContainer,
  ErrorText,
} from "./styles";
import { UPLOAD_IMAGE } from "./queries";

const UploadImageModal = ({ onClose }: { onClose: () => void }) => {
  const [filePreview, setFilePreview] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => hiddenFileInput?.current?.click();

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFilePreview(URL.createObjectURL(event?.target?.files?.[0]));
      setFile(event?.target?.files?.[0]);
    }
  };

  const [uploadImage, { error }] = useMutation(UPLOAD_IMAGE, {
    onCompleted: () => onClose(),
    onError: (err) => console.error("Image upload was unsuccessful", err),
  });

  const onSubmit = () => uploadImage({ variables: { file } });

  return (
    <Modal
      isOpen
      ariaHideApp={false}
      onRequestClose={onClose}
      className="update-modal"
      style={{ content: {}, overlay: { background: "rgba(0, 0, 0, 0.5)" } }}
    >
      <ModalWrapper>
        <ModalHeader>Upload Image</ModalHeader>
        <Button onClick={handleClick}>
          {file ? "Select New" : "Select"} Image
        </Button>
        <FileInput
          type="file"
          onChange={onChangeFile}
          accept=".gif,.jpg,.jpeg,.png"
          ref={hiddenFileInput}
        />
        {filePreview ? (
          <PreviewContainer>
            <ImageContainer>
              <img src={filePreview} height="300" width="300" alt="" />
            </ImageContainer>
            <ImageName>
              Current image: <br /> {file?.name}
            </ImageName>
          </PreviewContainer>
        ) : null}
        {error ? (
          <ErrorText>
            Image upload was unsuccessful. Please try again.
          </ErrorText>
        ) : null}
        <ButtonContainer>
          <Button onClick={onSubmit}>Upload</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonContainer>
      </ModalWrapper>
    </Modal>
  );
};

export default UploadImageModal;
