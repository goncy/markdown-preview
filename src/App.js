import React, { Component } from 'react'
import marked from 'marked'

import Window from './components/Window'

import './App.css'

const defaultText = `
  Heading
  =======

  Sub-heading
  -----------
  
  ### Another deeper heading
  
  Paragraphs are separated
  by a blank line.

  Leave 2 spaces at the end of a line to do a  
  line break

  Text attributes *italic*, **bold**, 
  \`monospace\`, ~~strikethrough~~ .

  Shopping list:

    * apples
    * oranges
    * pears

  Numbered list:

    1. apples
    2. oranges
    3. pears

  The rain---not the reign---in
  Spain.

  *[Gonzalo Pozzo](https://freecodecamp.com/goncy)*
`

class App extends Component {
  state = {
    text: defaultText
  }

  render() {
    const {text} = this.state

    return (
      <div className='App vh-100 h-100 bg-blue flex flex-column justify-between'>
        <main className='flex w-100 flex-row-ns flex-column'>
          {/* Texto plano */}
          <div className='pa2 w-100'>
            <Window title='Texto plano'>
              <textarea
                className='bg-transparent near-white code'
                rows={31}
                defaultValue={defaultText}
                onChange={event => this.setState({text: event.target.value || ''})}
              />
            </Window>
          </div>

          {/* Markdown */}
          <div className='pa2 pl0-ns pt0 pt2-ns w-100'>
            <Window
              title='Markdown'
              bgColor='near-white'
              borderColor='moon-gray'
              textColor='near-black'
            >
              <span dangerouslySetInnerHTML={{__html: marked(text)}} />
            </Window>
          </div>
        </main>
        <footer className='center tc pa1 near-white helvetica'>
          Hecho con <span role='img' aria-label='hearth'>❤️</span> por <a target='_blank' rel="noopener noreferrer" href='https://github.com/goncy'>Gonzalo Pozzo</a> para <a target='_blank' rel="noopener noreferrer" href='https://www.freecodecamp.com'>freeCodeCamp</a> <span role='img' aria-label='camp'>🏕️</span>
        </footer>
      </div>
    )
  }
}

export default App
