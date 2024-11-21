// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

// export default function card({product}) {
//     return (
//         <div className="flex flex-col max-w-[370px] flex-wrap p-[16px]  bg-[#081116]" >
//             <img src="{product.imageUrl ?? 'no image'}" alt="{product.name ?? 'no.name '}" className="block max-h-[100px) mb-4 object-cover" />
//             <div className="flex flex-col gap-2">
//                 <h4 className="font-medium text-[20px] text-white">{product.name ?? 'no name'}</h4>
//                 <span className="block font-medium text-[14px] text-[#eaeaea]">{product.category ?? 'Uncatagorized'}</span>
//                 <span className="block font-medium text-[20px) text-white"> {formatToIDRCurrency(product.price) ?? 'not for sale'}</span>
//                 <div>
//                     {
//                         product.stock <= 0 > (
//                             <>
//                             <p className='text-xl font-semibold text-center text-red-500'>out of stock</p>
//                             </>
//                         ) : (product.stock <= 25 && product.stock !== 0) ? (
//                             <>
//                                <p className="text-xl font-semibold text-center text-yellow-500">Almost Sold Out</p>
//                                 <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
//                                   <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
//                                   <span>Add to cart</span>
//                                 </Button>
//                             </>
//                           ) : (
//                             <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
//                               <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
//                               <span>Add to cart</span>
//                             </Button>
//                           )}
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// Card.propTypes = {
//     product: PropTypes.object
// }


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";

export default function Card({ product }) {
    return (
        <div className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-black">
            <img src={product.imageUrl ?? ''} alt={product.name ?? 'No name'} className="block max-h-[300px] mb-4 object-cover" />
            <div className="flex flex-col gap-2">
                <h4 className="font-medium text-[20px] text-white">{product.name ?? 'No Name'}</h4>
                <span className="block font-medium text-[14px] text-[#eaeaea]">{product.category ?? 'Uncatagorized'}</span>
                <span className="block font-medium text-[20px] text-white">{formatToIDRCurrency(product.price) ?? 'Not for sale'}</span>
                <div>
                    {product.stock <= 0 ? (
                        <p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
                    ) : (product.stock <= 25 && product.stock !== 0) ? (
                        <>
                        <p className="text-l font-semibold text-right text-red-500">Almost Sold Out</p>
                        <Button 
                            type="button" 
                            className="inline-flex items-center justify-center gap-2 p-4 bg-gray-800 text-center hover:bg-gray-700 text-white active:bg-gray-600"
                        >
                            <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                            <span>Add to cart</span>
                        </Button>
                    </>
                    ) : (
                        <Button 
                        type="button" 
                        className="inline-flex items-center justify-center gap-2 p-4 bg-gray-800 text-center hover:bg-gray-700 text-white active:bg-gray-600"
                      >
                        <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                        <span>Add to cart</span>
                      </Button>
                      
                    )}
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    product: PropTypes.object
}
