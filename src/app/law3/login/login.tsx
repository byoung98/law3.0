import { stackServerApp } from "@/stack";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const authResponse = await stackServerApp.sendMagicLink({
        email,
        redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/law3/dataHome`,
      });

      if (authResponse.success) {
        res.status(200).json({ message: "Magic link sent to your email." });
      } else {
        res.status(500).json({ message: "Failed to send magic link." });
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}