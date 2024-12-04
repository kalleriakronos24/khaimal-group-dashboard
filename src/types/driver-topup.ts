type TDriverTopupList = {
    id: string;
    uid: string;
    amount: number;
    receiptImage: string;
    createdAt: string;
    driver: {
        id: string;
        name: string;
        phone: string;
    }
    transactionHistory: {
        status: string;
    }
}