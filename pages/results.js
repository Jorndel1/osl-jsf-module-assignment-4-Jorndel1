import Layout from "../components/Layout";
import Image from "next/image";
import axios from "axios";

const metadata = {
  title: "Results",
  description: "Just a results page",
  author: "Jorn",
  keywords: "results, api, page",
};

export default function Results({ results }) {
  return (
    <>
      <Layout metaData={metadata}>
        <h1>Results</h1>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Age</th>
              <th scope="col">Country</th>
              <th scope="col">Picture</th>
            </tr>
          </thead>
          <tbody>
            {results
              ? results.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.name.title}</td>
                      <td>{user.name.first}</td>
                      <td>{user.name.last}</td>
                      <td>{user.dob.age}</td>
                      <td>{user.location.country}</td>
                      <td>
                        <Image
                          src={user.picture.thumbnail}
                          alt="Picture of the author"
                          width={40}
                          height={40}
                        />
                      </td>
                    </tr>
                  );
                })
              : "No users found."}
          </tbody>
        </table>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const apiurl = process.env.apiPath;
  const apiQuery = process.env.apiQuery;
  let response = [];

  try {
    const json = await axios.get(`${apiurl}${apiQuery}`);
    response = json.data.results;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      results: response,
    },
  };
}
