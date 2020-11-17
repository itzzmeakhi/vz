import React, { useState, useEffect } from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import axios from 'axios';
import StatisticsItem from './../StatisticsItem/StatisticsItem';

const StoryBoard = () => {
    const [stats, setStats] = useState(null);
    const getStats = async () => {
        const interviews = (await axios.get('https://www.random.org/integers/?num=1&min=900&max=3000&col=1&base=10&format=plain&rnd=new')).data;
        const hired = (await axios.get('https://www.random.org/integers/?num=1&min=60&max=227&col=1&base=10&format=plain&rnd=new')).data;
        const rejected = (await axios.get('https://www.random.org/integers/?num=1&min=300&max=500&col=1&base=10&format=plain&rnd=new')).data;
        const inProgress = interviews - (hired + rejected);
        const avgHiring = `${((hired / interviews) * 100).toFixed(2)}%`;
        const statsObj = {
            interviews,
            hired,
            rejected,
            inProgress,
            avgHiring
        }
        setStats({...statsObj});
    }
    useEffect(() => {
        getStats();
        const interval = setInterval(() => getStats(), 5000);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return(
        <Container>
            <Row>
                <StatisticsItem title="Number of Interviews" data={stats?.interviews} />
                <StatisticsItem title="Number of people hired" data={stats?.hired} />
                <StatisticsItem title="Number of people rejected" data={stats?.rejected} />
                <StatisticsItem title="Number of In-progress Records" data={stats?.inProgress} />
                <StatisticsItem title="Average Hiring Percentage" data={stats?.avgHiring} />
            </Row>
        </Container>
    )
}

export default StoryBoard;