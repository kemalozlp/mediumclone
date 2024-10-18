"use client"
import Link from 'next/link';
import { Login, RightArrow } from '../svgfiles/svg';
import { login } from './actions';
import "./login.css"

export default function LoginPage() {

  return (
    <div className="login">
      <form>
        <h1>Giriş Yap</h1>
        <label htmlFor="email">Email:
        <input id="email" name="email" type="email" required placeholder='E-Posta Giriniz...'/></label>
        <label htmlFor="password">Password:
        <input id="password" name="password" type="password" required placeholder='Şifre Giriniz...'/></label>
        <button formAction={login}>Giriş Yap <Login /></button>
      </form>
      <Link href={"/signup"}>Kayıt Ol <RightArrow /></Link>
    </div>
  )
}