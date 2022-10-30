import Link from 'next/link'
import Image from 'next/image'

export default function primerPost() {
  return (
    <div>
        
        <h1>Mi primer post</h1>
        <Image 
            src = "/img/1.jpg"
            width = {600}
            height = {600}
            alt = "Mi imagen con Image."
        ></Image>
        <Link href="/">
            Volver al inicio
        </Link>

    </div>
  )
}
