
import Image from "next/image";
const Dashboard = () => {
  return (
    <div className="container mx-auto lg:max-w-[1300px] mt-4">
      <div className="flex justify-between items-center">
        <Image src="/images/logobig.png" alt="Logo" width={120} height={40} />
        
      </div>
    </div>
  );
};

export default Dashboard;
