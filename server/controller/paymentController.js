const router = require("express").Router();
const stripe = require("stripe")(process.env.stripe); // ✅ Stripe initialized

router.post("/buy", async (req, res) => {
  try {
    // 1. Create product
    const product = await stripe.products.create({
      name: "T-shirt",
    });

    // 2. Create price
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 100 * 100,
      currency: "INR",
    });

    // 3. Create checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3001/success",
      cancel_url: "http://localhost:3000/cancel", // ✅ Fixed typo from cance_url
      customer_email: "pbatham21@gmail.com",
    });

    return res.json(session);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      success: false,
    });
  }
});

router.get("/success", async (req, res) => {
  try {
    // Your success logic here, e.g., verify payment status, update DB, etc.

    return res.status(200).json({
      message: "Payment success processed successfully",
      success: true,
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      success: false,
    });
  }
});

module.exports = router;
