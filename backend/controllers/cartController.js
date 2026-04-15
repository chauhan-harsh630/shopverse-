import Cart from '../models/Cart.js';

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
    
    if (cart) {
      res.json(cart);
    } else {
      res.json({ userId: req.user._id, items: [] });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId: req.user._id });

    if (cart) {
      // Check if product exists in cart
      const itemIndex = cart.items.findIndex(p => p.productId.toString() === productId);

      if (itemIndex > -1) {
        // Product exists, update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Product does not exist, push it
        cart.items.push({ productId, quantity });
      }

      cart = await cart.save();
      return res.status(200).json(cart);
    } else {
      // Generate new cart for user
      const newCart = await Cart.create({
        userId: req.user._id,
        items: [{ productId, quantity }],
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
// @access  Private
export const removeFromCart = async (req, res) => {
  try {
    const productId = req.params.id;
    let cart = await Cart.findOne({ userId: req.user._id });

    if (cart) {
      cart.items = cart.items.filter(item => item.productId.toString() !== productId);
      cart = await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
