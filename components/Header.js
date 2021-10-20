import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './header.module.css';

export const Header = () => {
    const router = useRouter();

    return (
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? styles.selectedTab : styles.navTab}>Home</a>
        </Link>
        <Link href="/plans/medicare-supplement">
          <a className={router.pathname === "/plans/medicare-supplement" ? styles.selectedTab : styles.navTab}>Medicare Supplement Plans</a>
        </Link>
        <Link href="/plans/part-d-prescription">
          <a className={router.pathname === "/plans/part-d-prescription" ? styles.selectedTab : styles.navTab}>Part D Plans</a>
        </Link>
        <Link href="/plans/local-plans">
          <a className={router.pathname === "/plans/local-plans" ? styles.selectedTab : styles.navTab}>Local Dubque Plans</a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname === "/contact" ? styles.selectedTab : styles.navTab}>Contact</a>
        </Link>

        {/* <Image
          src="/images/profile.jpeg"
          height={144}
          width={144}
          alt="Marty Sullivan"
        /> */}
      </div>
    )
}

export default Header;