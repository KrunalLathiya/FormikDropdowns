// src/FormikSelect.jsx

import { useField } from "formik";
import { TextField, MenuItem } from "@mui/material";

// eslint-disable-next-line react/prop-types
const FormikSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      select
      label={label}
      {...field}
      helperText={errorText}
      error={!!errorText}
      variant="outlined"
      fullWidth
    >
      {
        // eslint-disable-next-line react/prop-types
        props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))
      }
    </TextField>
  );
};

export default FormikSelect;
