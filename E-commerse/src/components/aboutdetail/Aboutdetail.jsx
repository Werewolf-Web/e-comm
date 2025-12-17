import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './About.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LoopIcon from '@mui/icons-material/Loop';
const Aboutdetail = () => {
  return (
    <>
<div className="py-5"
// style={{backgroundColor:"rgba(238, 238, 238, 0.8)"}}
>
  <div className="container">
    <div className="row g-4 text-white">

      {/* Card 1 */}
      <div className="col-lg-3 col-md-6">
        <div className="feature-card">
          <LocalShippingIcon className="feature-icon" />
          <h4>Free Shipping</h4>
          <p>
            Enjoy free shipping on all orders, providing a convenient and
            cost-effective way to receive your favorite products.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-3 col-md-6">
        <div className="feature-card">
          <SupportAgentIcon className="feature-icon" />
          <h4>Support Agent</h4>
          <p>
            Our dedicated support team is here to assist you and provide
            exceptional customer service.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-3 col-md-6">
        <div className="feature-card">
          <LoopIcon className="feature-icon" />
          <h4>Return</h4>
          <p>
            Hassle-free returns within a specified period. Simple and convenient
            return process.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-lg-3 col-md-6">
        <div className="feature-card">
          <CurrencyRupeeIcon className="feature-icon" />
          <h4>Payment</h4>
          <p>
            Secure and convenient payment options for a seamless shopping
            experience.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

    </>
  )
}

export default Aboutdetail