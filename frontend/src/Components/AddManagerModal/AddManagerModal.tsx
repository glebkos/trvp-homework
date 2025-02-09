import React from 'react';

interface AddModalProps {
    title: string;
}

export const AddManagerModal = (props: AddModalProps) => {
    const { title } = props;
    return (
        <>
            <div className="manager-modal__title">{title}</div>
            <form method="POST" className="manager-modal__form">
                <div className="manager-modal__name-block">
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
            </form>
        </>
    );
};
