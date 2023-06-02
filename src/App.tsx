import { useState } from 'react'
import { Textarea, Button, Heading, Box } from '@chakra-ui/react'
import './App.css'

function App() {


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      flexDirection="column"
    >
      <Heading>Welcome to Sentiment Analysis</Heading>
      <Textarea placeholder='Enter your text here for sentiment analysis' />
      <Button colorScheme='blue' marginTop="10px" >Predict Sentiment</Button>
    </Box>
  )
}

export default App
