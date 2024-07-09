// src/FormikMultiSelect.js

import { useField } from "formik";
import { TextField, MenuItem } from "@mui/material";

// eslint-disable-next-line react/prop-types
const FormikMultiSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      select
      label={label}
      {...field}
      SelectProps={{
        multiple: true,
      }}
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

export default FormikMultiSelect;
