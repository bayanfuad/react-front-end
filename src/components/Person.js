import React from 'react'

function Person(props) {
    


  return (
    <div>
        <h1 data-testid='name'>Your name is:{props.name}</h1>
        <h4 data-testid='age'>Your age after five years:{props.age}</h4>
        <h4>Your gender: {props.gender}</h4>

        <form onSubmit={props.func}>
            <input type='text' placeHolder='edit name' name='n'/>
            <br></br>
            <input type='text' placeHolder='edit age' name='a'/>
            <br></br>
            <input type='text' placeHolder='edit gender' name='g'/>
            <br></br>
            <input type='submit' value='Press to edit'></input>
              
        </form>
    </div>
  )
}

export default Person



