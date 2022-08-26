import * as yup from "yup";

export const formSchemaAdd = yup.object().shape({
  tittle: yup.string().required("Digite uma linguagem"),
  status: yup.string().required("selecione um nivel"),
});
