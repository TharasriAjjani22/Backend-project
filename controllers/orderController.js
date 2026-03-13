import orderModel from "../models/orderModel.js";

// Create Order
const placeOrder = async (req, res) => {
  try {
    const order = req.body;
    const newOrder = await orderModel.create(order);
    res.status(201).json(newOrder);   // send created order to frontend
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Orders
const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json(orders);  // send orders to frontend
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Order
const updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const order = req.body;

    const updatedOrder = await orderModel.findByIdAndUpdate(
      id,
      order,
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { placeOrder, getOrders, updateOrder };