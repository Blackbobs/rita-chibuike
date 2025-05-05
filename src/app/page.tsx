import ClientPage from "./ClientPage"
import type { Metadata } from "next"
import { constructMetadata } from "./seo.config"

export const metadata: Metadata = constructMetadata({
  title: "Home",
  description:
    "Rita Chibuike is an Agile Product Manager and UX Writer passionate about solving complex problems and creating meaningful user experiences.",
})

export default function Home() {
  return <ClientPage />
}
