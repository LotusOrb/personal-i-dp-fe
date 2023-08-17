import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  console.log(request.url);
  const data = await axios.get(
    "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
  );
  return response.end(JSON.stringify(data.data));
}
