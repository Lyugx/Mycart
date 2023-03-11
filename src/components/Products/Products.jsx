import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Ruuning shoes.', price: '$5', image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F3024878-105_DEFAULT%3Frp%3Dstandard-30pad%7CpdpZoomDesktop%26scl%3D0.50%26fmt%3Djpg%26qlt%3D85%26resMode%3Dsharp2%26cache%3Don%2Con%26bgc%3Df0f0f0%26wid%3D1836%26hei%3D1950%26size%3D850%2C850&imgrefurl=https%3A%2F%2Fwww.underarmour.com%2Fen-us%2Fp%2Frunning%2Fmens_ua_charged_pursuit_3_running_shoes%2F3024878.html&tbnid=Qi0jKIgNVy6_JM&vet=12ahUKEwj-o-DrxNT9AhW0DWIAHYJlAEUQ94IIKAN6BQgBEPsD..i&docid=GZ5EZ0hx9AvggM&w=1836&h=1950&q=running%20shoes&ved=2ahUKEwj-o-DrxNT9AhW0DWIAHYJlAEUQ94IIKAN6BQgBEPsD' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F3024878-105_DEFAULT%3Frp%3Dstandard-30pad%7CpdpZoomDesktop%26scl%3D0.50%26fmt%3Djpg%26qlt%3D85%26resMode%3Dsharp2%26cache%3Don%2Con%26bgc%3Df0f0f0%26wid%3D1836%26hei%3D1950%26size%3D850%2C850&imgrefurl=https%3A%2F%2Fwww.underarmour.com%2Fen-us%2Fp%2Frunning%2Fmens_ua_charged_pursuit_3_running_shoes%2F3024878.html&tbnid=Qi0jKIgNVy6_JM&vet=12ahUKEwj-o-DrxNT9AhW0DWIAHYJlAEUQ94IIKAN6BQgBEPsD..i&docid=GZ5EZ0hx9AvggM&w=1836&h=1950&q=running%20shoes&ved=2ahUKEwj-o-DrxNT9AhW0DWIAHYJlAEUQ94IIKAN6BQgBEPsD' },
    
];

const Products = () => {
    return (
        <main>
    <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
            </Grid>
        ))}
    </Grid>
    </main>
    )
    
}

export default Products;
