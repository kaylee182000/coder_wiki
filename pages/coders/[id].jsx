import Head from "next/head";
import React from "react";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { coder: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  //map data to an array of paths object with params (id)
  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default function Detail({ coder }) {
  return (
    <>
    <Head>
      <title>Coder Wiki | {coder.name}</title>
      <meta key="keywords" content="coders" />
    </Head>
      <div>
        <h1>{coder.name}</h1>
        <p>Email: {coder.email}</p>
        <p>Website: {coder.website}</p>
        <p>
          Address: {coder.address.street}, {coder.address.city}
        </p>
        <p>Company: {coder.company.name}</p>
      </div>
    </>
  );
}
