import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/UseTelegram';
const tg = window.Telegram.WebApp


function App() {

  const {onToggleButton, tg} = useTelegram()

  useEffect( () => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }
 
  return (
    <div className="App">
      <button onClick={onToggleButton} >toggle</button>
    </div>
  );
}

export default App;
