import List from './List.jsx'

function App2(){
    
     const fruits = [{id: 1, name: "Apple", calories: 95},
                    {id: 2, name: "Orange", calories: 45},
                    {id: 3, name: "Banana", calories: 105}, 
                    {id: 4, name: "Pineapple", calories: 37}, 
                    {id: 5, name: "Mango", calories: 99}];
    
    return(
        <List items={fruits} category="Fruits"></List>
    );
}

export default App2