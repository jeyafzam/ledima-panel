"use client";
import { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useCallback } from "react";

const SignInPage = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [verificationStatus, setVerificationStatus] = useState<string | null>(
    null
  );
  const router = useRouter();
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const generateVerificationCode = (): string => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleLogin = () => {
    const phoneRegex = /^(091[0-9]{8}|092[0-9]{8}|093[0-9]{8})$/;

    if (!phoneNumber) {
      alert("لطفاً شماره تلفن را وارد کنید.");
    } else if (!phoneRegex.test(phoneNumber)) {
      alert(
        "شماره تلفن وارد شده صحیح نیست. لطفاً شماره تلفن صحیح با پیش‌شماره معتبر وارد کنید."
      );
    } else {
      const verificationCode = generateVerificationCode();
      sessionStorage.setItem("phoneNumber", phoneNumber);
      sessionStorage.setItem("verificationCode", verificationCode);

      alert(`کد تایید با موفقیت ارسال شد: ${verificationCode} (مقدار فرضی)`);
      setIsVerified(true);
      setTimeout(() => firstInputRef.current?.focus(), 0);
    }
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;

    const regex = /^[0-9]*$/;

    if (regex.test(phone)) {
      setPhoneNumber(phone);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleCodeChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < verificationCode.length - 1) {
      const nextInput = document.getElementById(
        `code-input-${index + 1}`
      ) as HTMLInputElement | null;
      nextInput?.focus();
    }
  };

  const handleVerifyCode = useCallback(() => {
    const storedCode = sessionStorage.getItem("verificationCode");

    if (verificationCode.join("") === storedCode) {
      setVerificationStatus("success");
      setIsVerified(true);
      router.push("/internal-pages/dashboard");
    } else {
      setVerificationStatus("error");
      setTimeout(() => {
        setIsVerified(false);
        setPhoneNumber("");
        setVerificationCode(["", "", "", ""]);
        setVerificationStatus(null);
      }, 2000);
    }
  }, [verificationCode, router]);

  const getInputClass = (index: number, isFocused: boolean) => {
    if (verificationStatus === "success") {
      return "border-4 border-green-500 bg-[#fff]";
    }
    if (verificationStatus === "error") {
      return "border-4 border-red-500 bg-[#fff]";
    }
    return isFocused ? "border-gray-300" : "border-gray-300";
  };

  useEffect(() => {
    const handleEnterKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isVerified) {
        handleVerifyCode();
      }
    };

    document.addEventListener("keydown", handleEnterKey);

    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [isVerified, handleVerifyCode]);

  return (
    <div className="bg-[#EDEDED] h-screen flex justify-center items-center">
      <div className="container mx-auto lg:max-w-[1050px] flex lg:flex-row items-center lg:justify-between">
        <div className="max-w-sm w-full mt-10">
          <div>
            <Image
              src="/images/logobig.png"
              alt="Login Image"
              width={110}
              height={0}
              className="object-cover mb-3 mr-1"
            />
          </div>
          <div className="py-6 px-5 bg-white border">
            {!isVerified ? (
              <>
                <p className="mb-4 text-[13px] pb-2">
                  لطفا شماره تلفن خود را وارد کنید
                </p>
                <p className="text-xs">شماره تلفن همراه</p>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    className="w-full p-2 mb-4 border-b focus:outline-none focus:border-[#2A3494] text-[13px]"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    onKeyDown={handleKeyPress}
                    autoFocus
                  />
                  <button
                    onClick={handleLogin}
                    className="p-2 mt-4 bg-[#2A3494] text-white self-end text-[13px]"
                  >
                    دریافت کد ورود
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <p className="mb-4 text-[13px] pb-2 text-center">
                  کد پیامک شده را وارد کنید
                </p>
                <div dir="ltr">
                  {verificationCode.map((value, index) => (
                    <input
                      key={index}
                      id={`code-input-${index}`}
                      type="text"
                      value={value}
                      onChange={(e) => handleCodeChange(e.target.value, index)}
                      maxLength={1}
                      className={`w-10 h-10 m-1 text-center border focus:outline-none bg-[#D5E8D4] ${getInputClass(
                        index,
                        document.activeElement?.id === `code-input-${index}`
                      )}`}
                      ref={index === 0 ? firstInputRef : null}
                    />
                  ))}
                </div>
                <button
                  onClick={handleVerifyCode}
                  className="px-5 py-2 mt-3 bg-[#2A3494] text-white text-[13px]"
                >
                  تایید ورود
                </button>
              </div>
            )}
          </div>
          <p className="text-xs pt-2 pr-1 text-[#858583]">
            لدیما، دستیار آنلاین فروش
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/img32.png"
            alt="Login Image"
            width={550}
            height={500}
            className="object-cover"
          />
          <p dir="ltr" className="text-[#858583] px-5 text-xs">
            Ladima- CopyRights 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
