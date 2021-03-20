import Layout from "../components/Layout";
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
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Age</th>
              <th scope="col">Nickname</th>
            </tr>
          </thead>
          <tbody>
            {results
              ? results.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.age}</td>
                      <td>{user.nickname}</td>
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
  let response = [];

  try {
    const json = await axios.get(apiurl);
    response = json.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      results: response,
    },
  };
}
