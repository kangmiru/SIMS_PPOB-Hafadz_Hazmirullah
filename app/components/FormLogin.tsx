'use client'

import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon, LockClosedIcon, AtSymbolIcon } from '@heroicons/react/24/outline'

function FormLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const [formLogin, setFormLogin] = useState({
        email:'',
        password:'',
    })

    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setFormLogin({...formLogin, [name]:value});
        setErrors({...errors, [name]:''});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: any = {};

        if(!formLogin.email) newErrors.email = 'email wajib di isi'
        if(!formLogin.password) newErrors.password = 'password wajib di isi'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
          }
  
          console.log('Data berhasil dikirim:', formLogin);
          alert('Form berhasil disubmit!');
    }
    
  return (
    <div className='mt-8 grid grid-cols-1 gap-x-6 gap-y-8'>
      <form onSubmit={handleSubmit} className='space-y-6'>

        {/* email */}
        <FormInput
            label="Email"
            name="email"
            placeholder="Masukkan email anda"
            value={formLogin.email}
            onChange={handleChange}
            error={errors.email}
            Icon={AtSymbolIcon}
        />

        {/* password */}
        <FormInput
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Buat password"
            value={formLogin.password}
            onChange={handleChange}
            error={errors.password}
            Icon={LockClosedIcon}
            showToggle
            onToggle={() => setShowPassword(!showPassword)}
            isToggled={showPassword}
        />

        {/* Submit Button */}
        <div className='flex justify-center'>
            <button
                type='submit'
                className='inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline focus:outline-2 focus:outline-red-600 w-96'
            >
                Login
            </button>
        </div>
      </form>
    </div>
  )
}

interface FormInputProps {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    Icon: React.ElementType;
    type?: string;
    showToggle?: boolean;
    onToggle?: () => void;
    isToggled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
    name,
    placeholder,
    value,
    onChange,
    error,
    Icon,
    type = 'text',
    showToggle,
    onToggle,
    isToggled,
}) => {
    const hasError = Boolean(error);
    return (
      <div className='mt-0'>
        <div
          className={`flex items-center rounded-md bg-white pl-3 ${
            hasError ? 'outline-red-500' : 'outline-gray-300'
          } outline outline-1 -outline-offset-1 focus-within:outline-2 focus-within:-outline-offset-2 ${
            hasError ? 'focus-within:outline-red-500' : 'focus-within:outline-indigo-600'
          } w-96`}
        >
        <div
          className={`shrink-0 select-none text-lg sm:text-sm/6 py-2 mr-2 ${
            hasError ? 'text-red-500' : 'text-gray-500'
          }`}
        ><Icon className={`h-4 w-4 ${hasError ? 'text-red-500' : 'text-gray-500'}`} />
        </div>
        <input
          type={type}
          name={name}
          id={name}
          className='block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {showToggle && onToggle && (
          <button
            type='button'
            onClick={onToggle}
            className='shrink-0 select-none text-lg sm:text-sm/6 py-2 mr-4 text-gray-500'
          >
            {isToggled ? (
              <EyeSlashIcon className='w-4 h-4' />
            ) : (
              <EyeIcon className='w-4 h-4' />
            )}
          </button>
          )}
          </div>
          {error && <p className='text-red-500 text-xs mt-1 text-right'>{error}</p>}
        </div>
      );
}

export default FormLogin
