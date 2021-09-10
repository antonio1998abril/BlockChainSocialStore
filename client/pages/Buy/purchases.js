import React from 'react'
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function purchases() {
    return (
        <>
        <br/> 
        <Link  href="/Buy/selled">
             <Button variant="outline-danger"> See My Sales  </Button>
        </Link>
        <br/>
        <br/>
        <div className="tablecard">
            <div  className="optionsMenu"><b>My Purchases</b></div>
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

export default purchases
