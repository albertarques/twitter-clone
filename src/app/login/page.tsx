import { AuthButtonServer } from "../components/auth-button-server"

export default function Login() {
  return (
    <>
      <AuthButtonServer/>
      <section class="grid place-content-center">
        <h1>Por favor, inicia la sesión.</h1>
      </section>
    </>
  )
}