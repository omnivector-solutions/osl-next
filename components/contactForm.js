import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/styles";

import { TextField, Button, Typography } from "@material-ui/core";

import { Formik } from "formik";
import * as Yup from "yup";
import { sendContactEmail } from "../lib/mail-api";

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 110,
    color: "white",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    margin: "4px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  const date = Date.now();

  const EmailSent = () => {
    return (
      <Typography>
        Your email has been sent. We'll get back to you soon!
        <br />
        <br />
      </Typography>
    );
  };
  const Form = () => {
    return (
      <Fragment>
        <Typography>
          Please fill out your contact details along with a message to let us
          know what we can help you with. We can usually respond to requests
          withing 24 hours.
        </Typography>
        <Formik
          initialValues={{
            email: "",
            name: "",
            message: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            const msg = {
              to: "info@omnivector.solutions",
              from: "info@omnivector.solutions",
              bcc: "8139504@bcc.hubspot.com",
              subject: `Website Contact Form: ${Date(Date.now())}`,
              html: `<p><strong>Name: </strong> ${values.name}</p><p><strong>Email: </strong> ${values.email}</p> <hr /><p><strong>Message: </strong> ${values.message}</p>`,
            };
            sendContactEmail(msg);
            setSubmitionCompleted(true);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Email Required"),
            name: Yup.string().required("Name Required"),
            message: Yup.string().required("Message Required"),
          })}>
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  error={errors.name && touched.name}
                  label="name"
                  name="name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.name && touched.name && errors.name}
                  margin="normal"
                />

                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  error={errors.email && touched.email}
                  label="email"
                  name="email"
                  className={classes.textField}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email && errors.email}
                  margin="normal"
                />

                <TextField
                  size="small"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={8}
                  error={errors.message && touched.message}
                  label="message"
                  name="message"
                  className={classes.textField}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.message && touched.message && errors.message
                  }
                  margin="normal"
                />

                <div className={classes.buttonsContainer}>
                  <Button
                    className={classes.button}
                    type="button"
                    variant="contained"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}>
                    Reset
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}>
                    Submit
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </Fragment>
    );
  };

  return (
    <Fragment> {isSubmitionCompleted ? <EmailSent /> : <Form />}</Fragment>
  );
};

export default Contact;
