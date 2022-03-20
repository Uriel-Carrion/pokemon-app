import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokémons">
      <h1>Hola</h1>
      <Button color={"gradient"}>Click me</Button>
    </Layout>
  );
};

export default HomePage;
