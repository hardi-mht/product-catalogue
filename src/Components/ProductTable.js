import { TableCell, TableRow, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { Carousel } from 'react-responsive-carousel';
import QuantityButton from './QuantityButton';

const ProductTable = ({ product }) => {
    const { cartProducts } = useContext(GlobalContext)
    const { id, images, title, price, stock, setSize = 1 } = product;
    const productInCart = cartProducts.find((item) => item.id === id);

    return (
        <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            style={{ width: '100%' }}
        >

            {/* <TableCell component="th">
                <>
                    <Carousel showThumbs={false} infiniteLoop>
                        {images.map((image, index) => (
                            <div key={index} style={{ position: 'relative' }}>
                                <img
                                    src={image}
                                    alt={`${title} - ${index}`}
                                    style={{ maxHeight: '200px', width: 'auto' }}
                                />
                            </div>
                        ))}
                    </Carousel></>
            </TableCell> */}
            <TableCell style={{ width: '30%' }} >
                <div style={{ width: '400px' }}>
                    <Carousel showThumbs={false} infiniteLoop>
                        {images.map((image, index) => (
                            <div key={index} style={{ position: 'relative' }}>
                                <img
                                    src={image}
                                    alt={`${title} - ${index}`}
                                    style={{ maxHeight: '200px', width: 'auto' }}
                                />
                            </div>
                        ))}</Carousel>
                </div>
            </TableCell>
            <TableCell align="right" style={{ width: '14px' }}>{title}</TableCell>
            <TableCell align="right" style={{ width: '14px' }}>
                {stock > 0 && stock < 5 ? <Typography variant="body2" color="error">{`Only ${stock} left!`}
                </Typography> : <div />}
            </TableCell>
            <TableCell align="right" style={{ width: '14px' }}>{setSize}</TableCell>
            <TableCell align="right" style={{ width: '14px' }}>{price.toFixed(2)}</TableCell>
            <TableCell align="right" style={{ width: '14px' }}> <QuantityButton productInCart={productInCart} product={product} /></TableCell>
        </TableRow>
    )
}

export default ProductTable