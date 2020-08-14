import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import { Formik } from "formik";
import * as Yup from "yup";
import { sendContactEmail } from "../lib/mail-api";

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 110,
    color: "white",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleClickOpen() {
    setSubmitionCompleted(false);
    setOpen(true);
  }
  const date = Date.now();

  return (
    <React.Fragment>
      <Button color="primary" onClick={handleClickOpen} className={classes.tab}>
        Contact Us
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        {!isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">
              Contact Omnivector Solutions:
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out your contact details along with a message to let
                us know what we can help you with. We can usually respond to
                requests withing 24 hours. Thanks!
              </DialogContentText>
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
                    bcc: "8139504@forward.hubspot.com",
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
                        helperText={
                          errors.email && touched.email && errors.email
                        }
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
                      <DialogActions>
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}>
                          Reset
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          Submit
                        </Button>
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        )}
        {isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
            <DialogContent>
              Your email has been sent. We'll get back to you soon!
            </DialogContent>
            <DialogActions>
              <br />
            </DialogActions>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  );
};

export default Contact;
