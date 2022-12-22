import React from 'react'

function Listitem({id,done,title,delHandler,doneHandler}) {
  return (
    <li className={`list-group-item d-flex justify-content-between ${done ? 'bg-success text-white' : ''}`}>
         { done ? <del>{title}</del> : title }
                <div>
                    <button className="btn btn-small bg-danger text-white ms-2" onClick={()=> delHandler(id)}> <i className="fas fa-trash"></i></button>
                    <button className={`btn btn-small  text-white ${done? "bg-info" : "bg-success"}`} onClick={()=> doneHandler(id)}>
                      
                          {
                            done ? <i className="fas fa-undo-alt"></i> : <i className="fas fa-check"></i>
                          }
                  
                      </button>
                </div>
    </li>
  )
}
export default Listitem
 