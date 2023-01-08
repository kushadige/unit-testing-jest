import React from 'react'
import './App.css';
import Form from './components/Form';
import Counter from './components/Counter';
import Videos from './components/Videos';

const videos = ["Udemy", "Youtube", "Vimeo", "Tutorial"];
const App = () => {
  return (
    <div>
      <h1>@kushadige</h1>
      <button aria-label='enabled' data-testid="enabled">Enabled</button>
      <button aria-label='disabled' data-testid="disabled" disabled>Disabled</button>
      <h3 className='green'>Green Color</h3>
      <Counter />
      <Form />
      <Videos videos={videos} />
    </div>
  )
}

export default App