import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email valido"),
  password: yup
    .string()
    .required("Digite uma senha")
    .matches(
      /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/,
      "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
    ),
});
