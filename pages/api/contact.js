import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const data = req.body;
  const sgRes = await sgMail
    .send(data)
    .then((res) => {
      console.log("res[0] type: ", typeof res[0]);
      console.log("res[0]: ", res[0].statusCode);

      return res;
    })
    .catch((error) => {
      if (error.response) {
        console.error(error.response.body);
        return error;
      }
    });

  res.status(sgRes[0].statusCode).json({ body: sgRes[0].body });
};
