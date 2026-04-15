import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    if (items && items.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    } else {
      // Create the order
      const order = new Order({
        userId: req.user._id,
        items,
        totalPrice,
      });

      const createdOrder = await order.save();

      // Clear the user's cart after placing the order
      await Cart.findOneAndDelete({ userId: req.user._id });

      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
