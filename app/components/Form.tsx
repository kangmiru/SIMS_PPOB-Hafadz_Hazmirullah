'use client'

import React, { useState } from 'react'
import {EyeIcon, EyeSlashIcon, LockClosedIcon, AtSymbolIcon, UserIcon} from '@heroicons/react/24/outline'

function Form() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        nama_depan: '',
        nama_belakang: '',
        password: '',
        konfirmasi_password: '',
      });

      const [errors, setErrors] = useState<any>({});

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: any = {};
    
        if (!formData.email) newErrors.email = 'Email wajib diisi';
        if (!formData.nama_depan) newErrors.nama_depan = 'Nama depan wajib diisi';
        if (!formData.nama_belakang) newErrors.nama_belakang = 'Nama belakang wajib diisi';
        if (!formData.password) newErrors.password = 'Password wajib diisi';
        if (!formData.konfirmasi_password) newErrors.konfirmasi_password = 'Konfirmasi password wajib diisi';
    
        if (formData.password && formData.password.length < 8) {
          newErrors.password = 'Password minimal terdiri dari 8 karakter';
        }
    
        if (formData.password && formData.konfirmasi_password) {
          if (formData.password !== formData.konfirmasi_password) {
            newErrors.konfirmasi_password = 'Password tidak sama';
          }
        }
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }

        console.log('Data berhasil dikirim:', formData);
        alert('Form berhasil disubmit!');
      };

  return (
        <div className='mt-8 grid grid-cols-1 gap-x-6 gap-y-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>

                {/* Email */}
                <FormInput
                    label="Email"
                    name="email"
                    placeholder="Masukkan email anda"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    Icon={AtSymbolIcon}
                />

                {/* Nama Depan */}
                <FormInput
                    label="Nama Depan"
                    name="nama_depan"
                    placeholder="Nama depan"
                    value={formData.nama_depan}
                    onChange={handleChange}
                    error={errors.nama_depan}
                    Icon={UserIcon}
                />

                {/* Nama Belakang */}
                <FormInput
                    label="Nama Belakang"
                    name="nama_belakang"
                    placeholder="Nama belakang"
                    value={formData.nama_belakang}
                    onChange={handleChange}
                    error={errors.nama_belakang}
                    Icon={UserIcon}
                />

                {/* Password */}
                <FormInput
                    label="Password"
                    name="password"
                    type={showPassword1 ? 'text' : 'password'}
                    placeholder="Buat password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    Icon={LockClosedIcon}
                    showToggle
                    onToggle={() => setShowPassword1(!showPassword1)}
                    isToggled={showPassword1}
                />

                {/* Konfirmasi Password */}
                <FormInput
                    label="Konfirmasi Password"
                    name="konfirmasi_password"
                    type={showPassword2 ? 'text' : 'password'}
                    placeholder="Konfirmasi password"
                    value={formData.konfirmasi_password}
                    onChange={handleChange}
                    error={errors.konfirmasi_password}
                    Icon={LockClosedIcon}
                    showToggle
                    onToggle={() => setShowPassword2(!showPassword2)}
                    isToggled={showPassword2}
                />

                {/* Submit Button */}
                <div className='flex justify-center'>
                    <button
                        type='submit'
                        className='inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline focus:outline-2 focus:outline-red-600 w-96'
                    >
                        Registrasi
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
    };

export default Form
