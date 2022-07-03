import Link from "next/link";

const Bolo = ({ bolo }) => {
  return (
    <article>
      <Link href="/bolo/[id]" as={`/bolo/${bolo.id}`}>
        <a>
          <h2>{bolo.title}</h2>
          <p>{bolo.description}</p>
        </a>
      </Link>
    </article>
  );
};

export default Bolo;
