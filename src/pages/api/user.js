import dbConn from "../../db";
import Contact from "../models/user";

export default async function handler(req, res) {
  try {
    const body = req.body;
    await dbConn();

    await Contact.create(body);

    // Return a JSON response
    res.status(200).json({
      message: "Message sent successfully!",
    });

  } catch (e) {
    console.error("Error:", e);
    // Return a JSON response for errors
    res.status(500).json({
      message: "Server error, please try again!",
    });
  }
}
