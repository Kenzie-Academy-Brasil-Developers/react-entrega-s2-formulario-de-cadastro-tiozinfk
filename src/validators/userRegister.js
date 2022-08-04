import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
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

  ConfirmPassword: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  bio: yup.string().required("Digite uma bio"),
  contact: yup
    .string()
    .required("Digite um Telefone")
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})?(\d{4}))$/,
      "Digite um numero valido"
    ),
});
