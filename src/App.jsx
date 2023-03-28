import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import Result from './components/result'

function App() {
  const [valueEmoji, setValueEmoji] = useState('fruit');

  return (
    <div className='App'>
      <Header/>
      <Form setValueEmoji = { setValueEmoji }></Form>
      <Result valueEmoji={valueEmoji}/>
      <h2>Main</h2>

      <Footer/>
    </div>
  )
}

export default App
