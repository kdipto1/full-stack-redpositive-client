import { useQuery } from "@tanstack/react-query";
import React from "react";
import Form from "./Form";
import Table from "./Table";

const Home = () => {
  const {
    data: candidates,
    isLoading,
    refetch,
  } = useQuery(["allCandidates"], () =>
    fetch("http://localhost:3000/candidates").then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div className="">
        <h2>Loading......</h2>
      </div>
    );
  }
  // console.log(candidates);
  return (
    <section className="container mx-auto">
      <Form refetch={refetch} />
      <Table refetch={refetch} candidates={candidates} />
    </section>
  );
};

export default Home;
