import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"


export interface RegisterData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
function Register() {
  const { register, handleSubmit, formState: { errors },watch } = useForm<RegisterData>();

  // Watch Password
  const watchPassword=watch("password");

  const formSubmit = (validData: RegisterData) => {
    console.log(validData);
  }
  return (
    <section className="flex flex-col gap-4 max-w-[800px] mx-auto mt-20">
      <h1 className="text-xl font-semibold">Register Your Account</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(formSubmit)}>
        {/* First name, and last name */}
        <section className="flex flex-row gap-4">
          <section className="flex flex-col gap-2 w-full h-[80px]">
            <Label>First Name</Label>
            <Input
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
          </section>
          <section className="flex flex-col gap-2 w-full h-[80px]">
            <Label>Last Name</Label>
            <Input
              {...register('lastName', { required: 'Last Name is required' })}
            />
            {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
          </section>
        </section>
        <section className="flex flex-col gap-2 w-full h-[80px]">
          <Label>Username</Label>
          <Input
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <span className="text-xs text-red-500">{errors.username.message}</span>}
        </section>
        <section className="flex flex-col gap-2 w-full h-[80px]">
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
        </section>
        <section className="flex flex-row gap-4">

          <section className="flex flex-col gap-2 w-full h-[80px]">
            <Label>Password</Label>
            <Input
              type="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
          </section>
          <section className="flex flex-col gap-2 w-full h-[80px]">
            <Label>Confirm Password</Label>
            <Input
              type="password"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: value => value === watchPassword || 'Passwords do not match'
              })}
            />
            {errors.confirmPassword && <span className="text-xs text-red-500">{errors.confirmPassword.message}</span>}
          </section>
        </section>

        <Button variant={'primary'}>Register</Button>
      </form>
      <section className="flex flex-row gap-2 text-sm">
        <span>Have an account ?</span>
        <Link className="text-blue-500 hover:underline" to={'/login'}>Login</Link>
      </section>
    </section>
  )
}

export default Register