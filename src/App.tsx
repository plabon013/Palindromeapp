import { useState } from 'react'
import { isPalindrome } from './utils/utils'
import Icon from './components/Icon'
import './App.css'

function App() {
  const [phrase, setPhrase] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(e.target.value); // Allow spaces for multi-word palindromes
  }

  return (
    <>
      <h3>Palindrome checking?</h3>
      <input type="text"
        placeholder='Insert a Text'
        onChange={handleChange}
      />
      {phrase && <p id='answer'><Icon b={isPalindrome(phrase)} />{isPalindrome(phrase) ? `${phrase} is a palindrome` : `${phrase} is not a palindrome`}</p>}
    </>
  )
}

export default App
