import dbConnect from "../../../lib/mongoDB";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    cookies,
    query: { id },
  } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not Authenticated !!");
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "DELETE") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not Authenticated !!");
    }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The Product Has Been Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
