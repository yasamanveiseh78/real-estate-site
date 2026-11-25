"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import styles from "@/components/layout/DashboardSidebar.module.css";

function SidebarMenu({ email, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();

  // بستن کرکره بعد از رفتن به صفحه دیگه
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // بستن با کلیک بیرون یا زدن Escape
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={styles.menu} ref={ref}>
      <button
        type="button"
        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <CgProfile />
        <span className={styles.email}>{email}</span>
      </button>

      <span className={styles.divider}></span>

      <div className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default SidebarMenu;