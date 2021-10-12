import useForm from "../utils/useForm";
import InputField from "./inputField/InputField";
import { createDoc } from "../scripts/fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";
import fields from "./inputField/fields.json";
export default function ModalAddCategory({ setModal }) {
  const database = getFirestore(firebaseInstance);
  const [values, handleChange, setState] = useForm();
  function handleSubmit() {
    createDoc(database, "categories", values);
    setModal(null);
    setState({});
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputField data={[handleChange, values]} options={fields.Name} />
      <InputField data={[handleChange, values]} options={fields.description} />
      <InputField data={[handleChange, values]} options={fields.imageUrl} />
      <button>Submit</button>
    </form>
  );
}