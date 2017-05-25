import React, { Component } from 'react'
import marked from 'marked'

import Window from './components/Window'

import './App.css'

class App extends Component {
  state = {
    text: ''
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
                rows={19}
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
          Hecho con ❤️ por <a target='_blank' href='https://github.com/goncy'>Gonzalo Pozzo</a> para <a target='_blank' href='https://www.freecodecamp.com'>freeCodeCamp</a> 🏕️
        </footer>
      </div>
    )
  }
}

export default App
