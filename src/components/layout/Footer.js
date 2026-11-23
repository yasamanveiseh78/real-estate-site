import styles from "@/components/layout/Footer.module.css";

function Footer() {
return ( <footer className={styles.footer}> <div className={styles.desc}> <h3>سامانه خرید و اجاره ملک</h3>


    <p>
      پلتفرمی برای جستجو، ثبت و مدیریت آگهی‌های املاک که به شما کمک می‌کند
      خانه یا ملک موردنظر خود را برای خرید یا اجاره با سهولت بیشتری پیدا کنید.
    </p>
  </div>

  <div className={styles.links}>
    <h4>دسترسی سریع</h4>

    <ul>
      <li>صفحه اصلی</li>
      <li>آگهی‌های املاک</li>
      <li>ثبت آگهی</li>
      <li>درباره ما</li>
    </ul>
  </div>

  <div className={styles.features}>
    <h4>خدمات ما</h4>

    <ul>
      <li>✓ خرید و فروش ملک</li>
      <li>✓ اجاره ملک</li>
      <li>✓ ثبت آگهی</li>
      <li>✓ مدیریت آگهی‌ها</li>
    </ul>
  </div>
</footer>


);
}

export default Footer;
