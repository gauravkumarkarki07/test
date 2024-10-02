import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export interface LoginData {
  usernameOrEmail: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();

  const formSubmit = (validData: LoginData) => {
    console.log(validData)
  }
  return (
    <section className="flex flex-col gap-4 max-w-[800px] mx-auto mt-20">
      <h1 className="text-xl font-semibold">Welcome to the site ! Please Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(formSubmit)}>
        <section className="flex flex-col gap-2 w-full h-[80px]">
          <Label>Username Or Email</Label>
          <Input
            {...register('usernameOrEmail', { required: 'Username or Email is required' })}
          />
          {errors.usernameOrEmail && <span className="text-xs text-red-500">{errors.usernameOrEmail.message}</span>}
        </section>
        <section className="flex flex-col gap-2 w-full h-[80px]">
          <Label>Password</Label>
          <Input
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
        </section>
        <Button variant={'primary'}>Login</Button>
      </form>
      <section className="flex flex-row gap-2 text-sm">
        <span>Don't have an account ?</span>
        <Link className="text-blue-500 hover:underline" to={'/register'}>Register</Link>
      </section>
    </section>
  )
}

export default Login