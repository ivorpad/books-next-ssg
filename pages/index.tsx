import type { NextPage } from 'next'
import Head from 'next/head'
import { Book } from '../interfaces/book.interface'
import styles from '../styles/Site.module.css'
import Image from 'next/image';
import Link from 'next/link'

const DEFAULT = "https://www.gutenberg.org/cache/epub/66477/pg66477.cover.medium.jpg"

const Home: NextPage<{ books: Book[] }> = ({ books }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jamstack</title>
      </Head>
      <main>
        <h1>2018 - 2022 Books</h1>

        <section>
          {books.map(book => (
            <article key={book.id} className={styles.article}>
              <Image src={book.formats["image/jpeg"] ? book.formats["image/jpeg"] : DEFAULT} width={100} height={100} alt={book.title} objectFit="cover" />
              <div>
                <h3><Link href={`book/${book.id}`}><a>{book.title}</a></Link></h3>
                <span>Written by {book.authors.map(author => author.name).join(', ')}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://gutendex.com/books/?author_year_start=2018')
  const books = await res.json()
  return {
    props: {
      books: books.results,
    },
  }
}

export default Home
