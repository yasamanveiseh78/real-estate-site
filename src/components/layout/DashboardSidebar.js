import styles from "@/components/layout/DashboardSidebar.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogoutButton from "../module/LogoutButton";
import SidebarMenu from "./SidebarMenu";

async function DashboardSidebar({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SidebarMenu email={session?.user.email}>
          <Link href="/dashboard">حساب کاربری</Link>
          <Link href="/dashboard/my-profiles">آگهی های من</Link>
          <Link href="/dashboard/add">ثبت آگهی</Link>
          <LogoutButton />
        </SidebarMenu>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;