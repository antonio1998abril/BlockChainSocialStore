import Link from 'next/link'
import React, { useState } from 'react'

function home() {
    const [interest,setInterest]=useState(false)

    const love =()=>{
        setInterest(!interest)
    }
    return (
        <>
        <div className="product_card">
            <div  className="wrapper">
                <div className="product-img">
                <img src="http://bit.ly/2tMBBTd" height="300" width="260"/>
                </div>
                 <div className="product-info">
                <div className="product-text">
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>Harvest Vases are a reinterpretation dddddddddddddddddddd<br/> 
                    of peeled fruits and vegetables as<br/> 
                    functional objects. The surfaces<br/> appear to be sliced and pulled aside,dsds
                    <br/> allowing room for growth. </p> 
                </div>

     
                <div className="product-price-btn">

                                                               {/*  */}
                        
                                               
                <div onClick={love}>
                    <span   className={interest ? "heart heart-active" : "heart"}></span>
                </div>
            
                            {/*  */}
                            
                    <p><span className="price">78345452</span>$</p>
                    
                    <Link href="/Detail/test">
                    <button type="button">buy now</button>
                    </Link>
                </div>
                </div> 
            </div>


             <div  className="wrapper">
                <div className="product-img">
                <img src="http://bit.ly/2tMBBTd" height="300" width="260"/>
                </div>
                <div className="product-info">
                <div className="product-text">
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>Harvest Vases are a reinterpretation<br/> 
                    of peeled fruits and vegetables as<br/> 
                    functional objects. The surfaces<br/> appear to be sliced and pulled aside,
                    <br/> allowing room for growth. </p> 
                </div>
                <div className="product-price-btn">
                <div onClick={love}>
                    <span   className={interest ? "heart heart-active" : "heart"}></span>
                </div>
                    <p><span>78</span>$</p>
                    <Link href="/Detail/test">
                    <button type="button">buy now</button>
                    </Link>
                </div>
                </div>
            </div>


            <div  className="wrapper">
                <div className="product-img">
                <img src="https://www.nature.com/immersive/d41586-021-00095-y/assets/mhyLY1FyCz/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg" height="300" width="260"/>
                </div>
                <div className="product-info">
                <div className="product-text">
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>Harvest Vases are a reinterpretation<br/> 
                    of peeled fruits and vegetables as<br/> 
                    of peeled fruits and vegetables as<br/>
                    of peeled fruits and vegetables as
                    fruits and vegetables
                    fruits and vegetables
                    fruits and vegetables
                    fruits and vegetables
                    gggg
                    <br/>
                    functional objects. The surfaces<br/> appear to be sliced and pulled aside,
                    <br/> allowing room for growth. </p> 
                </div>
                <div className="product-price-btn">
                    <p><span>78</span>$</p>
                    <Link href="/Detail/test">
                    <button type="button">buy now</button>
                    </Link>
                </div>
                </div>
            </div>

            <div  className="wrapper">
                <div className="product-img">
                <img src="https://www.gastrolabweb.com/u/fotografias/m/2020/7/9/f608x342-1604_31327_0.jpg" height="300" width="260"/>
                </div>
                <div className="product-info">
                <div className="product-text">
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>Harvest Vases are a reinterpretation<br/> 
                    of peeled fruits and vegetables as<br/> 
                    functional objects. The surfaces<br/> appear to be sliced and pulled aside,
                    <br/> allowing room for growth. </p> 
                </div>
                <div className="product-price-btn">
                    <p><span>78</span>$</p>
                    <Link href="/Detail/test">
                    <button type="button">buy now</button>
                    </Link>
                </div>
                </div>
            </div> 

        </div>

 








        </>

    )
}

export default home
