import { ChangeEvent, useState , useEffect} from 'react'
import { Textarea,  Button, Heading,Container, Stack, useColorMode,} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import axios from 'axios'
import Prediction from './components/Prediction';
import { PredictionData } from './interfaces';

function App() {

   // state to provide input to the server
  const [text ,setText] = useState("")
  const {colorMode, toggleColorMode} = useColorMode()


  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, []);

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


  const onPredictHandler = async () => {
    //  getting the location of server from .env file
    const api_location = import.meta.env.VITE_SENTIMENT_SERVER

    try {
      const response = await axios.post(
        api_location,
      {data: text}    
      )

      // updating the prediction data
      setPrediction(response.data)
  

    } catch (error) {
      
    }
  }

  return (
 
      <Container
        centerContent
        minW={{ base: "100%", lg: "container.lg" }}
        marginTop={{ base: "60px", lg: "120px" }}
      
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
