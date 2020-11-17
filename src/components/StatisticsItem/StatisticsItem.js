import React from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Col
} from 'reactstrap';

import './StatisticsItem.css';

const StatisticsItem = ({ title, data }) => {
    return(
        <Col md="4" className="mt-4 mb-2">
            <div>
                <Card body>
                    <CardTitle tag="h5" className="stat-header">{title}</CardTitle>
                    <hr />
                    <CardText className="display-4 stat-count">{data}</CardText>
                </Card>
            </div>
        </Col>
    )
}

export default StatisticsItem;