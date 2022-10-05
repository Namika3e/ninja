import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptas a nobis eum. Dolor, voluptates voluptatum. Illo fugit enim aut amet! Corporis perferendis ipsam similique beatae reprehenderit dolore porro quod.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim nulla natus recusandae aperiam explicabo numquam beatae facilis, ex error earum vero perspiciatis culpa corrupti repudiandae aliquid vel, excepturi nam.</p>

      <Link href="/ninjas"><a className={styles.btn}> See Ninja Listings</a></Link>
    </div>
    </>
  )
}
