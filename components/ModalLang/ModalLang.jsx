"use client";
import Link from "next/link";
import { useState } from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
export default function ModalLang() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(true);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="flex flex-col gap-4 w-full">
                <div className="w-full text-center font-semibold text-lg justify-center">Select Language</div>
                <div className="flex justify-center gap-4">
                    <Link href="/en">
                        <img src="en.png" className="w-[40px] h-[30px]" />
                    </Link>
                    <Link href="/de">
                        <img src="de.png" className="w-[40px] h-[30px]" />
                    </Link>
                </div>
            </div>
        </Modal>
    )
}