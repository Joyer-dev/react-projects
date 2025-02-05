function List(){
    const fruits=[
        { id:1,name:"orange", calories:95},
       { id:2,name:"pineapple", calories:37},
       {id: 3,name:"apple" ,calories:67},
        { id:4,name:"coconut", calories:159},
       {id:5,name:"mango", calories:157}];
       //fruits.sort((a,b)=>a.name.localeCompare(b.name));
       //fruits.sort((a,b)=>b.name.localeCompare(a.name));
       //fruits.sort((a,b)=>a.calories-b.calories);
       fruits.sort((a,b)=>b.calories-a.calories);
       const lowCalFruits=fruits.filter(fruit => fruit.calories<100);
    const listItem=lowCalFruits.map(lowCalFruit =><li key={lowCalFruit.id}>
        {lowCalFruit.name}: &nbsp;
        <b>{lowCalFruit.calories}</b></li>)
    return(<ul>{listItem}</ul>);

}
export default List