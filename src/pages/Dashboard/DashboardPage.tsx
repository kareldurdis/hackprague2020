import * as React from 'react';
import {createUseStyles} from "react-jss";
import Content from '../../components/Content';

const useStyles = createUseStyles({
});

interface Props {
    current: number,
    total: number,
    goal?: number,
}

const ProgressBar = ({ current, total, goal }: Props) => {
    const classes = useStyles();

return <div><div/> </div>;
}

const DasboradPage = () => {
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
                        322
                    </td>
                </tr>
                <tr>
                    <td>
                        Your spendings
                    </td>
                    <td>
                        279
                    </td>
                </tr>
            </table>

        </Content>
    );
}

export default DasboradPage;
