import React from 'react';
import { PredictionData } from "../interfaces"
import GaugeChart from "react-gauge-chart";
import { round } from 'lodash';
import { Badge, Text } from '@chakra-ui/react';

interface PredictionProps {
    predictionData : PredictionData
}

const Prediction: React.FC<PredictionProps> = ({predictionData}) => {
    return (
        <>
        {/* draws the gauge chart and info related to prediction when there is text dataa */}
        {(predictionData.data && predictionData.data!="")?(
            <>
            <GaugeChart
            id="gauge-chart3"
            nrOfLevels={2}
            colors={["#F56565","#48BB78"]}
            arcPadding={0.0}
            arcWidth={0.6}
            cornerRadius={2} 
            hideText
            animate={false}
            percent={predictionData.prediction_score?predictionData.prediction_score:0}
            />
            <Text fontSize='2xl' textAlign={"center"}>Confidence: {predictionData.confidence?round(predictionData.confidence*100,2):""}%</Text>
            <Text fontSize="4xl" textAlign={"center"}>Sentiment: {predictionData.predicted_label?
            (<Badge colorScheme='green' fontSize="2xl">Positive</Badge>):
            (<Badge colorScheme='red' fontSize="2xl">Negative</Badge>)}</Text>
            </>
        ):""}
       
        
        </>
    )
}

export default Prediction