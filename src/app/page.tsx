'use client';  
import '@/Styles/global.css';
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';  
import Image from 'next/image';  

const HomePage = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const router = useRouter();

  const handleLogin = () => {
    
    const phoneRegex = /^[0-9]+$/; 
    if (!phoneNumber) {
      alert('لطفاً شماره تلفن را وارد کنید.');
    } else if (phoneNumber.length !== 11) {
      alert('شماره تلفن باید 11 رقمی باشد.');
    } else if (phoneNumber.includes(' ')) {
      alert('شماره تلفن نباید شامل فضای خالی باشد.');
    } else if (!phoneRegex.test(phoneNumber)) {
      alert('شماره تلفن نباید شامل حروف باشد.');
    } else {
      sessionStorage.setItem('phoneNumber', phoneNumber);
    
      router.push('/dashboard');
    }
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="container flex justify-between mx-auto lg:max-w-[1100px]  items-center h-screen">
      <div className=" py-12 px-8 max-w-sm w-full bg-white rounded-lg shadow-md border border-blue-500 ">
        <h2 className=" text-2xl font-semibold mb-4">ورود به پنل مدیریت</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="شماره تلفن همراه"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onKeyDown={handleKeyPress}
          autoFocus
        />
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          ورود
        </button>
      </div>
      <div className="">
        <Image
          src="/images/img32.png" 
          alt="Login Image"
          width={600}  
          height={600} 
          className="object-cover rounded-lg"
        />
        <p dir="ltr" className="text-blue-500 px-6">Ladima- CopyRights 2025</p>
      </div>
    </div>
  );
};

export default HomePage;
