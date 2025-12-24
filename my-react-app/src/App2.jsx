import List from './List.jsx'

function App2(){
    
    const fruits = [{id: 1, name: "Apple", calories: 95},
                    {id: 2, name: "Orange", calories: 45},
                    {id: 3, name: "Banana", calories: 105}, 
                    {id: 4, name: "Pineapple", calories: 37}, 
                    {id: 5, name: "Mango", calories: 99}];
    
    const vegetables = [{id: 6, name: "Potatoes", calories: 77},
                        {id: 7, name: "Tomatoes", calories: 18},
                        {id: 8, name: "Carrot", calories: 41}, 
                        {id: 9, name: "Cucumber", calories: 16}, 
                        {id: 510, name: "Onion", calories: 40}];
    
    return(
        <>
            <List items={fruits} category="Fruits"></List>
            <List items={vegetables} category="Vegetables"></List>
        </>
    );
}

export default App2