import React from 'react'

const apiRequest = async(url = '', optionsObj = null, errorMsg = null) => { // url will accept the request ur, optionObj will denote the http methods like get,post... error will denote the existing error 

  try{
    const response = await fetch(url, optionsObj) // important to note!!
    if(!response.ok){
        throw new Error("Please refresh the page!")
    }
  }
  catch(error){
    errorMsg = error.message

  }
  finally
  {
    return errorMsg
  }
}

export default apiRequest
