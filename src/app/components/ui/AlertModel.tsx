import { AlertModalProps } from "@/app/types/youtube";


export const AlertModal: React.FC<AlertModalProps> = ({ message, onClose }) => {
    return (
      <div>
        {/* Modal code */}
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };