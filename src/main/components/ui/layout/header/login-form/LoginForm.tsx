import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useOutside } from '@/main/hooks/useOutside'
import { useAuth } from '@/main/hooks/useAuth'
import { IAuthFiedls } from './login-form.interface'


const LoginForm: FC = () => {
  const { ref, setIsShow, isShow } = useOutside(false)
  const [type, setType] = useState<'login' | 'register'>('login') 
  
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IAuthFiedls>({
    mode: 'onChange'
  })
  
  const { setUser } = useAuth()
  
  return (
    <div>LoginForm</div>
  )
}

export default LoginForm