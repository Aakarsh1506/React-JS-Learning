
function List(){
    const fruits = [{id: 1, name: "Apple", calories: 95},
                    {id: 2, name: "Orange", calories: 45},
                    {id: 3, name: "Banana", calories: 105}, 
                    {id: 4, name: "Pineapple", calories: 37}, 
                    {id: 5, name: "Mango", calories: 99}];
    
    fruits.sort((a,b) => a.name.localeCompare(b.name)); //Sort logic for name
    //fruits.sort((a,b) => a.calories - b.calories) //Sort logic for calories low to high
    //fruits.sort((a,b) => b.calories - a.calories) //Sort logic for calories high to low

    const listItems = fruits.map(fruits => <li key={fruits.id}>{fruits.name}: &nbsp; {fruits.calories}cal</li>); //&nbsp; is a space creater

    return(<>
            <ul className="edit">{listItems}</ul>
           </>
    );

}

export default List
