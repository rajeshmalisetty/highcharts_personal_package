// src/HighchartsCoreComponent.tsx
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface HighchartsComponentProps {
    options: Highcharts.Options;
}

const HighchartsCoreComponent: React.FC<HighchartsComponentProps> = ({ options }) => {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsCoreComponent;