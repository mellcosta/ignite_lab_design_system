import './styles/global.css';

import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { TextInput } from './components/TextInput';
import { Text } from './components/Text';
import { Heading } from './components/Heading';

export function App() {
  return (
    <div className='bg-gray-900 flex content-center items-center gap-5 flex-col p-3'>
      <div className='flex content-center items-center gap-4 flex-col'>
        <img src="../public/vite.svg" alt="" />
        <Heading>Igninte Lab</Heading>
        <Text>Faça Login e comece a usar</Text>
      </div>
      <div>
        <span className='flex flex-col'>
          <label htmlFor="email"> <Text>Endereço de e-mail</Text> </label>
          <input type="email" id='email' />
        </span>
        <span className='flex flex-col'>
          <label htmlFor="password"> <Text>Sua senha</Text> </label>
          <input type="password" id='password' />
        </span>
      </div>
      <div>
        <Checkbox/> <Text>Lembrar-me</Text> 
      </div>
      <div>
        <Button>Click Me</Button>
      </div>
    </div>
  )
}
