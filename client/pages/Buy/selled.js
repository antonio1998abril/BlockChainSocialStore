import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'

function selled() {
    return (
        <>
        <br/> 
        <Link  href="/Buy/purchases">
             <Button variant="outline-success"> See My Purchses </Button>
        </Link>
        <br/>
        <br/>
        <div className="tablecard">
            <div  className="optionsMenu"><b>My Sales</b></div>
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

export default selled
