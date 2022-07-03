import useSWR from "swr";
import Bolo from "../components/Bolo";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR("/api/receitas", fetcher);

  if (error) return <div>Falha ao carregar</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      {data.map((bolo, key) => (
        <Bolo bolo={bolo} key={key} />
      ))}
    </div>
  );
};

export default Home;
