import { ModalContextType } from '../../Pages/modalWindow/Modal.types.ts';

export interface ManagerItemInterface {
    profile: string;
    id: string;
    name: string;
    setModal: (props: ModalContextType) => void;
}
