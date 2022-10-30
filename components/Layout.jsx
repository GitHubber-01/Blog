import Head from "next/head"

export default function Layout({children, title, description}) {
  return (
    <div>
        <Head>
            <title>{title}.</title>
            <meta
                name = "description"
                content = {description}
            />
        </Head>
        <nav>
          Principio de la página
        </nav>

        <main>
          {children}
        </main>

        <footer>
          Fin de la página
        </footer>
    </div>
  )
}

Layout.defaultProps = {
  title: "Next.js | Mi sitio web",
  description: "Descripción de mi sitio web"
}