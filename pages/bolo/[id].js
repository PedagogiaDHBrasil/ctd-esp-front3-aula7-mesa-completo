import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Bolo = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/receitas/${query.id}`,
    fetcher
  );

  if (error) return <div>Falha ao carregar</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      <Link href="/">
        <a>
          <button>Página inicial</button>
        </a>
      </Link>

      <img src={data.image} alt={data.title} />
      <span>
        <h2>{data.title}</h2>
        <p> {data.description}</p>
      </span>

      <p>{data.text}</p>
    </div>
  );
};

export default Bolo;
