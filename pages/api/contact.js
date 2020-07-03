import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const data = req.body;
  const sgRes = await sgMail
    .send(data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      // Log friendly error
      console.error(error);

      if (error.response) {
        // Extract error msg
        const { message, code, response } = error;
        console.log(message);
        console.log(code);

        // Extract response msg
        const { headers, body } = response;
        console.log(headers);
        console.log(body);
      }
    });
  return res.status(sgRes[0].statusCode).json({ body: sgRes[0].body });
};
