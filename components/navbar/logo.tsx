import Image from "next/image";

export const Logo = () => (
  <Image
    src="/logo.png"
    alt="Backend Connoisseur Logo"
    width={120}
    height={30}
    className="h-5 w-auto" 
    priority
  />
);
