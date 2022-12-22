import React from 'react'

function Layout({children}) {
     return (
          <div className="container p-3 p-sm-1">
              <div className="row justify-content-center py-5">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                         <div className="card">
                              <div className="card-body">
                                   {children}
                              </div>     
                         </div>     
                    </div>    
               </div>      
          </div>
     )
}

export default Layout
