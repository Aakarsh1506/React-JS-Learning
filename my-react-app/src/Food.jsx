// To put JavaScript code in between HTML code, we need to use {}.
function Food(){
    
    const food1 = "Butter Chicken";
    const food2 = "Garlic Naan";
    const food3 = "Chicken Lollipop";
    

    return(
        <ul>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>
    );
}

export default Food