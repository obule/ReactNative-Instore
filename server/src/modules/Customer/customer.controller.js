import * as Yup from "yup";

import { PROVIDER_ENUM } from "./customer.model";
import { AuthProvider } from "../../services/AuthProvider";
import { getOrCreatedCustomer } from "./customer";
import { AuthServices } from "../../services/Auth";

export const create = async (req, res) => {
  const { token, provider } = req.body;

  const bodySchema = Yup.object().shape({
    token: Yup.string().required(),
    provider: Yup.string()
      .oneOf(PROVIDER_ENUM)
      .required(),
  });

  try {
    await bodySchema.validate({ token, provider });

    let data;

    if (provider === "FACEBOOK") {
      data = await AuthProvider.Facebook.authAsync(token);
    } else if (provider === "GOOGLE") {
      data = await AuthProvider.Google.authAsync(token);
    } else {
      res.sendStatus(400);
    }
    const customer = await getOrCreatedCustomer(data, provider);

    const jwtToken = AuthServices.createToken(customer);

    res.status(200).json({ token: jwtToken });
  } catch (error) {
    res.status(400).json({ message: error.message || "No Success" });
  }
};
