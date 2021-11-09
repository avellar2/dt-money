import { Dashboad } from "./components/Dashboad";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export const App = () => {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
        
    }

    return (
        <TransactionsProvider>
            <Header
                onOpenNewTransactionModal={handleOpenNewTransactionModal}
            ></Header>
            <Dashboad></Dashboad>
            <GlobalStyle />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            ></NewTransactionModal>
        </TransactionsProvider>
    );
};
