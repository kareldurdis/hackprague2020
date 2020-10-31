import React from "react";
import {PickTransactions} from "../../../components/PickTransactions";

export default () => {
    return (<PickTransactions title={'Monthly'} onPick={(transactions) => {
        console.log(transactions);
    }
    } />);
};
