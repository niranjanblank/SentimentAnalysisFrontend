import React from 'react';
import { PredictionData } from "../interfaces"
import GaugeChart from "react-gauge-chart";
import { round } from 'lodash';
import { Text } from '@chakra-ui/react';

interface PredictionProps {
    predictionData : PredictionData
}

const Prediction: React.FC<PredictionProps> = ({predictionData}) => {
    return (
        <>
        <GaugeChart
        id="gauge-chart3"
        nrOfLevels={2}
        colors={["red","green"]}
        arcWidth={0.5}
        hideText
        animate={false}
        percent={predictionData.prediction_score?predictionData.prediction_score:0}
        />
         <Text fontSize='2xl'>Confidence: {predictionData.confidence?round(predictionData.confidence*100,2):""}%</Text>
         
         <Text fontSize='4xl'>Sentiment: {predictionData.predicted_label?"Positive":"Negative"}</Text>
        
        </>
    )
}

export default Prediction