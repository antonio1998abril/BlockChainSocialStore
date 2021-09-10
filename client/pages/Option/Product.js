import React,{useContext} from 'react'
import Add from '../../components/Create/Create'
import {Table} from 'react-bootstrap'; 

function Product() {
    return (
        <>
        <Add/><br/>
    
        <div className="tablecard"> 
            <div  className="optionsMenu"><b>PRODUCTS</b></div>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                        <thead className="headerTable">
                        
                            <tr>
                            <th> Nombre</th>
                            <th> Price</th>
                            <th> Description</th>
                            <th> assig</th>
                            <th> assig</th>
                            </tr> 
                        </thead>
                        <tbody >
                            <tr>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                                <td className="text-sm">
                                    sds
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div> 
       

           
        </>
    )
}

export default Product
