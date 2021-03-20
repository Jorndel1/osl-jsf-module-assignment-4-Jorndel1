import Layout from "../components/Layout";
const metadata = {
  title: "About Us",
  description: "Just a about us page",
  author: "Jorn",
  keywords: "about, us, page",
};

export default function AboutUs() {
  return (
    <Layout metaData={metadata}>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula enim,
        ultricies non mauris et, sollicitudin eleifend turpis. Phasellus metus
        tellus, rutrum in eleifend vel, sollicitudin varius eros. Nullam
        porttitor sed orci vel lacinia. Phasellus non augue dapibus, venenatis
        arcu id, elementum tellus. Integer gravida pharetra tortor, id sodales
        magna sodales a.
      </p>
    </Layout>
  );
}
