
function List(props){
   
    const itemsList = props.items; //Printing the list using props
    const category = props.category;
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Sort logic for name
    //fruits.sort((a,b) => a.calories - b.calories) //Sort logic for calories low to high
    //fruits.sort((a,b) => b.calories - a.calories) //Sort logic for calories high to low
    
    //const Fruits = fruits.filter(fruits => fruits.calories); //Filtering low calorie fruits using filter function
    //const lowCalFruits = fruits.filter(fruits => fruits.calories<100); //Filtering low calorie fruits using filter function
    //const highCalFruits = fruits.filter(fruits => fruits.calories>100); //Filtering high calorie fruits using filter function


    const listItems = itemsList.map(item=> <li key={item.id}>{item.name}: &nbsp; {item.calories}cal</li>); //&nbsp; is a space creater

    //const listItems = lowCalFruits.map(lowCalFruits=> <li key={lowCalFruits.id}>{lowCalFruits.name}: &nbsp; {lowCalFruits.calories}cal</li>); //&nbsp; is a space creater
    //const listItems = highCalFruits.map(highCalFruits=> <li key={highCalFruits.id}>{highCalFruits.name}: &nbsp; {highCalFruits.calories}cal</li>); //&nbsp; is a space creater


    return(
           <>
            <h3>{category}</h3>
            <ul>{listItems}</ul>
           </>
    );

}

export default List
