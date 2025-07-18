interface JsonLdData {
  "@context"?: string;
  "@type"?: string;
  [key: string]: unknown;
}

interface JsonLdProps {
  data: JsonLdData | JsonLdData[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}