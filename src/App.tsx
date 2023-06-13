import { ChangeEvent, useState } from 'react'
import { Textarea, Center, Button, Heading, Box, Container, Divider, Stack, Icon, AbsoluteCenter } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import axios from 'axios'
import Prediction from './components/Prediction';
import { PredictionData } from './interfaces';

function App() {

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
 
      <Container
        centerContent
        minW={{ base: "100%", lg: "container.lg" }}
        marginTop={{ base: "60px", lg: "200px" }}
      
      >
        <Stack width="100%" spacing={5}>        
          <Heading fontSize={{ base: "50px", lg: "80px" }} textAlign={{ base: "center", lg: "left" }}><ChatIcon/>  Sentiment Analysis</Heading>
     
          <Textarea placeholder='Enter your text here for sentiment analysis' 
          variant="filled"
          value={text}
          borderRadius={10}
          size="lg"
          onChange={handleTextAreaChange}
          />
          <Button colorScheme='blue' marginTop="10px"
          onClick={onPredictHandler}
          >Predict Sentiment</Button>
          
          {prediction.data? (
            <Prediction predictionData={prediction}/>
          ): null}
        </Stack>
      </Container>
    
     
  )
}

export default App
