import React from 'react'
import Pheader from './Pheader'

const Barcode = () => {
  return (
   
    <div>
         <Pheader/>
         <div className="container d-flex align-items-center justify-content-center" id="container" >

    <div className="text-center">
       
        <div className="row mb-4">
            <div className="col">
                <img src="./img/cheapfinder.png" alt="cheapfinder" className="img-fluid"/>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col">
                <h2>Scan Barcode</h2>
            </div>
        </div>
        <div className="row mb-4">
        <div className="col-md-6">
            <label for="uploadImage" className="btn btn-secondary btn-block bg-success">Barcode Scan</label>

            </div>
            <div className="col-md-6">
                <input type="file" className="form-control-file"/>
            </div>
            
            
        </div>
        

       
        <div className="row">
            <div className="col">
                <h3>Search Results</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>URL</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                        <tr>
                            <td><img src="product-image1.jpg" alt="Product Image" className="img-thumbnail"/></td>
                            <td>Product 1</td>
                            <td>Description 1</td>
                            <td><a href="#">Product URL 1</a></td>
                            <td>$19.99</td>
                        </tr>
                        <tr>
                            <td><img src="product-image1.jpg" alt="Product Image" className="img-thumbnail"/></td>
                            <td>Product 1</td>
                            <td>Description 1</td>
                            <td><a href="#">Product URL 1</a></td>
                            <td>$19.99</td>
                        </tr>
                        <tr>
                            <td><img src="product-image1.jpg" alt="Product Image" className="img-thumbnail"/></td>
                            <td>Product 1</td>
                            <td>Description 1</td>
                            <td><a href="#">Product URL 1</a></td>
                            <td>$19.99</td>
                        </tr>
                        <tr>
                            <td><img src="product-image1.jpg" alt="Product Image" className="img-thumbnail"/></td>
                            <td>Product 1</td>
                            <td>Description 1</td>
                            <td><a href="#">Product URL 1</a></td>
                            <td>$19.99</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
    </div>
  )
}

export default Barcode
