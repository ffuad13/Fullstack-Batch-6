"use client";

import { useEffect, useState } from "react";

export default function ShowPost() {
  const [data, setData] = useState(null);

  //fetch satu data
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  //       if (!response.ok) {
  //         throw new Error("Http error!");
  //       }

  //       const dataJson = await response.json();
  //       setData(dataJson);
  //     } catch (error) {
  //       console.error("Gagal mengambil data:", error);
  //     }
  //   };

  //   getData();
  // }, []);

  //fetch banyak data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Http error!");
        }

        const dataJson = await response.json();
        setData(dataJson);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    getData();
  }, []);

  console.info(data);
  return (
    // <div>
    //   {data ? (
    //     <>
    //       <h2>Data Dari API</h2>
    //       <p>Title: {data.title}</p>
    //       <p>Body: {data.body}</p>
    //     </>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>

    //conditional &&
    // <div>
    //   {data && (
    //     <>
    //       {/* <h2>Data Dari API</h2>
    //       <p>Title: {data.title}</p>
    //       <p>Body: {data.body}</p> */}
    //     </>
    //   )}
    // </div>

    <div>
      {data ? (
        data.slice(50, 60).map((d) => (
          <>
            <h4>ID: {d.id}</h4>
            <p>Title: {d.title}</p>
            <p>Body: {d.body}</p>
          </>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
