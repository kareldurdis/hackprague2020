import * as React from 'react';
import Content from "../../../components/Content";
import EmergencyFundLogo from "../../../assets/emergency-fund.jpg";
import {Link} from "react-router-dom";
import {Routes} from "../../../components/Router/routes";
import {createUseStyles} from "react-jss";
import {formatEuro} from '../../../utils';

const useStyles = createUseStyles({
    card: {
        border: '1px solid black',
        padding: 20,
        width: '100%',
        maxWidth: 200,
        marginBottom: 20,
    },
    price: {
        textAlign: 'right',
        marginTop: 20,
    }
});

interface Props {
    name: string,
    amount: number,
    monthly?: number,
}

const SpendCard = ({name, amount, monthly}: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            {name}<br/>
            <div
                className={classes.price}>{formatEuro(amount)} {monthly !== undefined ? `${formatEuro(monthly)} / month` : ''}</div>
        </div>
    );
}

const SummaryPage = () => {
    return (
        <Content>
            <h1>Summary</h1>
            <h2>Monthly budget</h2>

            <SpendCard name={'Analyzed income'} amount={200}/>

            <SpendCard name={'Monthly payments'} amount={200}/>

            <SpendCard name={'Dreams payments'} amount={200}/>

            <SpendCard name={'Annual payments'} amount={200} monthly={20}/>

            Spending budget {formatEuro(20)}
            <Link to={Routes.Summary}>Continue (TODO)</Link>
        </Content>
    );
}

export default SummaryPage;
