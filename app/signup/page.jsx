import Link from "next/link";
import { LeftArrow, Login } from "../svgfiles/svg"; 
import { signUp } from "./actions";
import "./signup.css";

export default function SignUp() {
  return (
    <div className="signup" > 
        <h1>Kayıt Ol</h1>
        <form action={signUp}>
          <label htmlFor="firstName">
            <input type="text" name="firstName" placeholder="Adınız" required />
          </label>
          <label htmlFor="lastName">
            <input type="text" name="lastName" placeholder="Soyadınız" required />
          </label>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="E-posta Adresiniz" required />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" placeholder="********" required />
          </label>
          <button ><Login /> Kayıt Ol </button>
        </form>
        <button > <LeftArrow /> Giriş Yap</button>
      </div>
  );
}
