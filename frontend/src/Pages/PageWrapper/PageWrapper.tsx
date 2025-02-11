import { ReactElement } from 'react';
import { Header } from '../../Components/Header/Header.tsx';

interface PageWrapperProps {
    children?: ReactElement;
}
export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (<>
        <Header />
        {children}
    </>);
};
