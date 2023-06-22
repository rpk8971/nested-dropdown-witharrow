
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Box from './components/context/Box';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/user/UserContext';
import User from './components/context/user/User';

function App() {
  const name = {
    first:'fdede',
    last:'gopinav'
  }

  const namesList = [
    {
      first:'virat',
      last:'kohli'
    },
    {
      first:'sunil',
      last:'chetri'
    },
    {
      first:'raj',
      last:'kumar'
    }
  ]

  const test:[string,number] = ['2',2]
  const num:Array<number | string> = [3,'dew',23]

  let chk:string | number

  chk = 'sds'
  chk = 23

  console.log(test)

  return (
    <UserContextProvider>
    <ThemeContextProvider>
    <div className="App">
    <Greet name={'Vishwas'} messageCount={20} isLoggedIn={true} />
    <Person name={name} />
    <PersonList names={namesList}/>
    <Status status='success' />
    <Heading>{'hegfdywghwg'}</Heading>
    <Oscar>
    <Heading>{'hegfdywghwg'}</Heading>
    </Oscar>
    <Button handleClick={(event,id) => console.log('hii',event,id)} />
    <Input value="" handleChange={(event) => console.log(event)}   />
    <Container styles={{border:'1px solid black'}} />
    <Box/>
    <User/>
    </div>
    </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
