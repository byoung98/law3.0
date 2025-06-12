import { stackServerApp } from "@/stack";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const authResponse = await stackServerApp.authenticateUser({
        email,
        password,
      });

      if (authResponse.success) {
        res.status(200).json({ message: "Login successful", user: authResponse.user });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}