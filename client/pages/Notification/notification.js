import React from 'react'

function notification() {
    return (
        <div>
             <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="callout callout-info">
              <h5><i className="fas fa-info"></i> Note:</h5>
              This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.
            </div>


          
            <div className="invoice p-3 mb-3">

           
              <div className="row invoice-info">
                <div className="col-sm-4 invoice-col">
                  From
                  <address>
                    <strong>Admin, Inc.</strong><br/>
                    795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                    Phone: (804) 123-5432<br/>
                    Email: info@almasaeedstudio.com
                  </address>
                </div>
               
                <div className="col-sm-4 invoice-col">
                  To
                  <address>
                    <strong>John Doe</strong><br/>
                    795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                    Phone: (555) 539-1037<br/>
                    Email: john.doe@example.com
                  </address>
                </div>
               
                <div className="col-sm-4 invoice-col">
                  <b>Invoice #007612</b><br/>
                  <br/>
                  <b>Order ID:</b> 4F3S8J<br/>
                  <b>Payment Due:</b> 2/22/2014<br/>
                  <b>Account:</b> 968-34567
                </div>
              
              </div>
           


            
            </div>
          
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default notification
