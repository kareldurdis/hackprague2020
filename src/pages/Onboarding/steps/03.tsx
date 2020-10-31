import React from "react";
import {PickTransactions} from "../../../components/PickTransactions";

export default () => {
    return <PickTransactions title={'Annual'} onPick={(transactions) => {
        console.log(transactions);
    }
    } />
};
