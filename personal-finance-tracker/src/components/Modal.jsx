import {createPortal} from "react-dom"

function Modal() {
  

  return(
    <>
      {createPortal(
        <p>Happy</p>
      )}
    </>
  )
}