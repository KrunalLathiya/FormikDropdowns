// src/validationSchema.js

import * as Yup from 'yup';

const validationSchema = Yup.object({
    singleSelect: Yup.string().required('Required'),
    multiSelect: Yup.array().min(1, 'Select at least one option').required('Required'),
});

export default validationSchema;
