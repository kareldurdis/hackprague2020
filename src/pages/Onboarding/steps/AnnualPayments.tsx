import React from "react";
import {PickTransactions} from "../../../components/PickTransactions";

const AnnualPayments = () => {
    return <PickTransactions title={'Annual'} onPick={(transactions) => {
        console.log(transactions);
    }
    } />
};

export default AnnualPayments;
