import { ModalContextType } from '../../Pages/modalWindow/Modal.types.ts';

export interface ClientsItemProps {
    name: string;
    profile: string;
    id: string;
    setModal: (props: ModalContextType) => void;
    currentClients: any[];
    served: boolean;
}
