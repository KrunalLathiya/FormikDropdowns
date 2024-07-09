// src/MainForm.jsx

import { useState } from "react";
import { Formik, Form } from "formik";
import { Button, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import FormikSelect from "./FormikSelect";
import FormikMultiSelect from "./FormikMultiSelect";
import validationSchema from "./validationSchema";
import DisplaySelectedValues from "./DisplaySelectedValues";

// eslint-disable-next-line no-unused-vars
const Root = styled(Paper)(({ theme }) => ({
  maxWidth: 500,
  margin: "0 auto",
  padding: "2rem",
}));

// eslint-disable-next-line no-unused-vars
const FormTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
  textAlign: "center",
}));

// eslint-disable-next-line no-unused-vars
const FormField = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
}));

// eslint-disable-next-line no-unused-vars
const SubmitButton = styled(Button)(({ theme }) => ({
  display: "block",
  width: "100%",
}));

const MainForm = () => {
  const [formValues, setFormValues] = useState(null);

  const initialValues = {
    singleSelect: "",
    multiSelect: [],
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Root elevation={3}>
      <FormTitle variant="h5">Formik with MUI Select</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFormValues(values);
        }}
      >
        {() => (
          <Form>
            <FormField>
              <FormikSelect
                name="singleSelect"
                label="Single Select"
                options={options}
              />
            </FormField>
            <FormField>
              <FormikMultiSelect
                name="multiSelect"
                label="Multi Select"
                options={options}
              />
            </FormField>
            <SubmitButton type="submit" variant="contained" color="primary">
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
      <DisplaySelectedValues values={formValues} />
    </Root>
  );
};

export default MainForm;
