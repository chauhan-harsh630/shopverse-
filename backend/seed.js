import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const sampleProducts = [
  {
    name: 'MacBook Pro 14"',
    category: 'Electronics',
    subCategory: 'Laptops',
    price: 1999.99,
    description: 'Apple M3 Pro chip, 18GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    stock: 10
  },
  {
    name: 'Wireless Noise Cancelling Headphones',
    category: 'Electronics',
    subCategory: 'Accessories',
    price: 299.99,
    description: 'Over-ear headphones with 30-hour battery life',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb',
    stock: 25
  },
  {
    name: 'Cotton Graphic T-Shirt',
    category: 'Clothing',
    subCategory: 'Tops',
    price: 24.99,
    description: '100% organic cotton, unisex fit',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    stock: 50
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected successfully for Seeding...');
    
    // Clear old products
    await Product.deleteMany({});
    console.log('Old Products cleared');

    // Insert new products
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log('Sample Products Added:');
    
    // Print out the IDs so the user can copy them for Cart testing!
    createdProducts.forEach(p => console.log(`- ${p.name}: ID = ${p._id}`));

    process.exit();
  })
  .catch((err) => {
    console.log('Error: ', err.message);
    process.exit(1);
  });
