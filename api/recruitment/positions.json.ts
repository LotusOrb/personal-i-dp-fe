import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const uri = new URL(request.url || "", `http://${request.headers.host}`);
    console.log(request.url || "");
    // Harcoded Url For simplicty of deployment
    const data = await axios.get(
      "http://dev3.dansmultipro.co.id/api/recruitment/positions.json?" +
        uri.searchParams.toString()
    );
    return response.json({ query: request.query, data: data.data });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Failed To Retrieve Data", query: request.query });
  }
}
