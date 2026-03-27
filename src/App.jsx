import React from 'react'
import { useUser } from './hooks/useUser';

const App = () => {
  const users = useUser();
  console.log(users);
  return (
    <div className='h-screen w-full bg-zinc-950 text-white'>App</div>
  )
}

export default App