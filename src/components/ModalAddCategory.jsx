import useForm from "../utils/useForm";
import Button from "./Button";
import { createDoc } from "../scripts/fireStore";
import { useHistory } from "react-router-dom";
import { useCategory } from "../state/CategoryProvider";
export default function ModalAddCategory({setModal}) {
  const {dispatch}=useCategory()
  const [values, handleChange, setState] = useForm();
  function handleSubmit(e) {
    e.preventDefault()
    createDoc("categories", values);
    dispatch({ type: "ADD_CATEGORY", payload: values });
    setState({});
    console.log(values)
    alert('Category added')
    setModal(null)
  }
  return (
    <form className='modalForm' onSubmit={(e)=>handleSubmit(e)}>
      <h2>Add Category</h2>
      <label>
        <b>Category name</b>
        <input
          value={values.name || ""}
          type="text"
          name="name"
          placeholder="meat"
          onChange={handleChange}
        />
      </label>
      <label>
        <b>Description</b>
        <textarea
          value={values.description || ""}
          type="text"
          name="description"
          placeholder="Description...."
          onChange={handleChange}
        />
      </label>
      <label>
        <b>Image Url</b>
        <input
          value={values.imageURL || ""}
          type="text"
          name="imageURL"
          placeholder="https://unsplash.com/photos/8OpyEpJVgiQ"
          onChange={handleChange}
        />
      </label>
      {/* <InputField
        handleChange={handleChange}
        values={values.name || ""}
        options={fields.Name}
      />
      <InputField
        handleChange={handleChange}
        values={values.name || ""}
        name="description"
        options={fields.description}
      />
      <InputField
        handleChange={handleChange}
        values={values.name || ""}
        name="imageUrl"
        options={fields.imageUrl}
      /> */}
      <Button text='Submit'>Submit</Button>
    </form>
  );
}