import React from "react";
import Image from "next/image";

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  return (
    <div className="relative">
      <Image
        src="/images/png/notification.png" 
        alt="Notification Bell"
        width={32}
        height={32}
        
      />
      {count > 0 && (
        <span className="absolute -top-2 -right-1.5 bg-[#F30A06] text-white text-xs  rounded-full w-4 h-4 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
};

export default NotificationBadge;
