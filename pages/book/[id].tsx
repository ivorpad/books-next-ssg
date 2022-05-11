import React from 'react'
import { Book } from '../../interfaces/book.interface'
import styles from '../../styles/Site.module.css'

function Book({ book }: { book: Book }) {
  return (
    <div className={styles.container}>
      <h3>{book.title}</h3>
      <b>Subjects:</b>
      <ul>
        {book.subjects.map(subject => (
          <li key={subject}>{subject}</li>
        ))}
      </ul>
      <b>Download count: {book.download_count}</b>
    </div>
  )
}

export default Book;

export async function getStaticPaths() {
  const res = await fetch('https://gutendex.com/books/?author_year_start=2018')
  const books = await res.json();
  const paths = books.results.map((book: Book) => ({
    params: { id: String(book.id) },
  }))
  
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: Book }) {
  const res = await fetch(`https://gutendex.com/books/?ids=${params.id}`)
  const book = await res.json()
  return { props: { book: book.results[0] } }
}
