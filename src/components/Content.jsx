import React, { useState } from 'react'
// automatically change the value of greetings when the user refreshes the page.
const Content = () => {
//   const [count, setCount] = useState(0); // initial ah count variable la 0 value default ah irukum 
    const [greet, setGreet] = useState("")

    const handleClick = () =>
    {
        const greetings = ['Morning', 'Afternoon', 'Evevning', 'Night'];
        const int = Math.floor(Math.random()*4);
        setGreet(greetings[int]) // get the index number and reflect the values of the index.
      
    }
    // const increment =() =>{
    //   setCount(count + 1);
    //   setCount(count + 1);
    //   setCount(count + 1);// ipdi irukum podhu namba enna think pannuvom na count will be inc by 3 times but it doesnt en na, count la 0 dha initial value ah irukum appo eppalam use state fn kull vandalum the count will be 0 or any default vlaue only so inc will be happen by only one time.
     
    //   // setCount((count)=>{
    //   //   return count + 1; 
    //   // })
    //   // setCount((count)=>{
    //   //   return count + 1; 
    //   // })
    //   // setCount((count)=>{
    //   //   return count + 1; 
    //   // })// ipdi irundha 3 times inc aagum en na we are returning the updated value of count

    // }
    // const decrement =() =>{
    //   setCount(count - 1);
    // }
  return (
    <div>
        <p>Gooooooood {greet} from app.jsx!</p>
        <button onClick={() => handleClick()}>Hit me!</button>

        {/* <button onClick={decrement}>-</button> <span>{count}</span> <button onClick={increment}>+</button> */}
        
    </div>
                
  )
}

export default Content