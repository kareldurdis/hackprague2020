import * as React from 'react';
import {createUseStyles} from "react-jss";
import { Checkbox } from 'reakit';
import Content from '../../components/Content';
import DreamCard from '../../components/DreamCard';
import {transactions} from "../../db/transactions";

const useStyles = createUseStyles({
    slider: {
        width: '100%',
        background: 'black',
        position: 'relative',
        height: 5,
    },
    inner: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
    },
    goal: {
        height: 9,
        top: -2,
        width: 6,
        marginLeft: -3,
        background: 'brown',
        zIndex: 2,
        position: 'relative',
    }
});

interface Props {
    current: number,
    total: number,
    goal?: number,
}

const ProgressBar = ({ current, total, goal }: Props) => {
    const classes = useStyles();

    const progress = current / total * 100;
    const goalProgress = goal !== undefined ? goal / total * 100 : undefined;

    const isOk = goalProgress === undefined || progress <= goalProgress;

    return <div className={classes.slider}><div className={classes.inner} style={{ width: `${progress}%`, background: isOk ? 'green' : 'red' }} /> {goal !== undefined ? <div className={classes.goal} style={{ left: `${goalProgress}%` } } /> : null} </div>;
}

const DasboradPage = () => {

    const budget = 322;
    const spent = 279;
    const dayOfWeek = 3;
    const available = budget - spent;

    return (
        <Content>
            <h1>Dashboard</h1>
            <h2>Weekly spending</h2>
            <table>
                <tr>
                    <td>
                        Weekly budget
                    </td>
                    <td>
                        {budget}
                    </td>
                </tr>
                <tr>
                    <td>
                        Your spendings
                    </td>
                    <td>
                        {spent}
                    </td>
                </tr>
            </table>

            <ProgressBar current={spent} total={budget} goal={100 / 7 * dayOfWeek} />

            {available >= 0 ? <>You're doing good! You can spend {available} this week.</> : <>Vedeš si blbě</>}

            <button>Show Summary</button>

            <DreamCard dream={{ cost: 1000, name: 'Lambo', id: 'fake' }} />

            <h2>Payment History</h2>
            <ul>
                {transactions.slice(0, 3).map((transaction) => {
                    return <li key={transaction.id}>{transaction.description}</li>
                })}
            </ul>

            <h2>Recommended</h2>
            <label><Checkbox checked /> Emergency fund</label>
            <label><Checkbox /> Life insurance</label>

        </Content>
    );
}

export default DasboradPage;
