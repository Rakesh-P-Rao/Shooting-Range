import * as Yup from "yup";

const AddGunSchema = Yup.object().shape({
    name: Yup.string()
        .max(269, "Please Enter Less Than 270 Characters")
        .required("Enter the Name"),
    caliber: Yup.string()
        .typeError("Please Enter Numbers Only")
        .max(27, "Please Enter Less Than 27 Characters")
        .required("Please Enter Caliber"),
    rounds: Yup.number()
        .typeError("Please Enter Numbers Only")
        .max(1000, "Please Enter Number Less Than 1000")
        .required("Please Enter Rounds of Fire"),
    type: Yup.string().required("Please Select Type"),
    origin: Yup.string().required("Please Select Country of Origin"),
    description: Yup.string()
        .max(999, "Please Enter Less Than 1000 Characters")
        .required("Please Enter Description"),
});

export default AddGunSchema;
