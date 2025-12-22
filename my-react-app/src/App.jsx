import Students from './Students.jsx'

function App(){
   return(
      <>
        <Students name="Aakarsh Singh" age={18} isStudent={true}/>
        <Students name="Aashita Singh" age={13} isStudent={true}/>
        <Students />
      </>
   );
}

export default App 
