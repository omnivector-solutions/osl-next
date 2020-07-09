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

      if (error.response) {
        // Extract error msg
        const { message, code, response } = error;
        // Extract response msg
        const { headers, body } = response;
        return { statusCode: code, message: body.errors[0].message };
      }
    });
  if (sgRes.ResponseError) {
    // handle errors ugh!
    return sgRes;
  } else {
    res.status(sgRes[0].statusCode).json({ body: sgRes[0].body });
  }
};
