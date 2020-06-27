import React, { Fragment, useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 110,
    marginLeft: "5px",
    marginTop: 0,
    color: "white",
    opacity: 0.7,
    position: "relative",
    top: "-8px",
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setSubmitionCompleted(false);
    setOpen(true);
  };

  return (
    <Fragment>
      <Button color="primary" onClick={handleClickOpen}>
        Contact
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{ zIndex: 1303 }}>
        {!isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">
              Contact Omnivector Solutions
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
                  subject: "",
                }}
                validate={(values) => {
                  // Your client-side validation logic
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitionCompleted(true);
                  setOpen(false);
                }}>
                {({ isSubmitting }) => (
                  <Form>
                    <Field
                      fullWidth
                      label="Name"
                      variant="outlined"
                      type="email"
                      name="email"
                      autoComplete
                      autoFocus
                      margin="dense"
                      component={TextField}
                    />
                    <Field
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      name="email"
                      autoComplete
                      margin="dense"
                      component={TextField}
                    />
                    <Field
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      name="subject"
                      margin="dense"
                      component={TextField}
                    />
                    <Field
                      fullWidth
                      label="Message"
                      variant="outlined"
                      name="message"
                      margin="dense"
                      multiline
                      component={TextField}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </DialogContent>
          </React.Fragment>
        )}
      </Dialog>
    </Fragment>
  );
};

export default Contact;
