import { ChangeEvent, useEffect, useState } from 'react'
import { Textarea, Button, Heading, Box } from '@chakra-ui/react'
import './App.css'

function App() {

  const [text ,setText] = useState("")

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  // useEffect(()=>{
  //   console.log("Textarea vakye",text)
  // }, [text])

  const onPredictHandler = async () => {
    console.log("Text to send: ",text)
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
    </Box>
  )
}

export default App
