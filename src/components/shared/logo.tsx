import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={className}>
    <Image src="/logo2.png" alt={siteConfig.name} width={160} height={50} />
  </Link>
);

export default Logo;
