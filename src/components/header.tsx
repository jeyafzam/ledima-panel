import Image from "next/image";

import NotificationBadge from "@/components/notification-badge";

const Header = () => {
  return (
    <header className="pt-5 mb-3 flex justify-between items-center">
      <div>
        <Image
          src="/images/logobig.png"
          alt="Login Image"
          width={110}
          height={0}
          className="object-cover"
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="pl-7">
          <NotificationBadge count={8} />
        </div>
        <div>
          <Image
            src="/images/png/settings.png"
            alt="Settings Icon"
            width={32}
            height={32}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
