import { ChangeEvent, useEffect, useState } from 'react'
import { Textarea, Button, Heading, Box, useColorMode } from '@chakra-ui/react'

import axios from 'axios'
import Prediction from './components/Prediction';
import { PredictionData } from './interfaces';

function App() {
  const {colorMode, toggleColorMode} = useColorMode()
   // state to provide input to the server
  const [text ,setText] = useState("")

  // useEffect(() => {
  //   if (colorMode === "light") {
  //     toggleColorMode();
  //   }
  // }, []);

  // state to store prediction data from the server
  const [prediction, setPrediction] = useState<PredictionData>({
    data: null,
    prediction_score: null,
    predicted_label: null,
    confidence: null
  })
  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  // useEffect(()=>{
  //   console.log("Textarea vakye",text)
  // }, [text])

  const onPredictHandler = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/sentiment",
      {data: text}    
      )

      // updating the prediction data
      setPrediction(response.data)
      console.log(response.data)

    } catch (error) {
      
    }
  }

  return (

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        flexDirection="column"
      >
        <Heading>Welcome to Sentiment Analysis</Heading>
        <Textarea placeholder='Enter your text here for sentiment analysis' 
        value={text}
        onChange={handleTextAreaChange}
        />
        <Button colorScheme='blue' marginTop="10px"
        onClick={onPredictHandler}
        >Predict Sentiment</Button>
        
        {prediction.data? (
          <Prediction predictionData={prediction}/>
        ): ("")}
      </Box>
 
  )
}

export default App
