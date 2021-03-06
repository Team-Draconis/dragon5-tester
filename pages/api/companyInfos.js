// candidate register server
import { hash } from "bcrypt";
import dbConnect from "../../utils/dbConnect";
const Company = require("../../models/Company");

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        hash(req.body.company_password, 10, async function (err, hash) {
          req.body.company_password = hash;
          const newCompany = await Company.create(req.body);
          console.log("##THIS IS COMPANY REGISTERED IN DB", newCompany);
          res.status(200).json({ data: newCompany });
        });
      } catch (error) {
        res.status(400).json({ message: "Oops,Sigh Up failed" });
      }
      break;
  }
};
