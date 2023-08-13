// import React from "react";
// import './Collection.css';
// const Collection = () => {
//     return (
//         <>
//             <h2 className="collection">Collections</h2>
//             <div className="collection-description">
//                 <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</p>
//                 <a href="#">All collection in pune</a>
//             </div>
//             <div className='col-lg-12 collection-column'>
//                 <div className="row d-flex justify-content-center" >
//                     <div className='col-lg-10 d-flex justify-content-between'>
//                         <div className="card card-collection" >
//                             <img src="Collectionimage1.avif" className="card-img-top" alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">11 Best insta worthy places</h5>
//                             </div>
//                         </div>
//                         <div className="card card-collection">
//                             <img src="Collectionimage1.avif" className="card-img-top" alt="..." />
//                             <div class="card-body">
//                                 <h5 class="card-title">11 Best insta worthy places</h5>
//                             </div>
//                         </div>
//                         <div className="card card-collection">
//                             <img src="Collectionimage1.avif" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 class="card-title">11 Best insta worthy places</h5>
//                             </div>
//                         </div>
//                         <div className="card card-collection">
//                             <img src="Collectionimage1.avif" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 class="card-title">11 Best insta worthy places</h5>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }
// export default Collection;

import React from "react";
import './Collection.css';

const Collection = () => {
    return (
        <>
            <h2 className="collection">Collections</h2>
            <div className="collection-description">
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</p>
                <a href="#">All collections in Pune</a>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row justify-content-between">
                            <div className="col-lg-3">
                                <div className="card card-collection">
                                    <img src="Collectionimage1.avif" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">11 Best Insta-worthy Places</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card card-collection">
                                    <img src="Collectionimage1.avif" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">11 Best Insta-worthy Places</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card card-collection">
                                    <img src="Collectionimage1.avif" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">11 Best Insta-worthy Places</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card card-collection">
                                    <img src="Collectionimage1.avif" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">11 Best Insta-worthy Places</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection;
