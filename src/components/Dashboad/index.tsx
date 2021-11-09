import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export const Dashboad = () => {
    return (
        <>
            <Container>
                <Summary></Summary>
                <TransactionsTable></TransactionsTable>
            </Container>
        </>
    )
};
