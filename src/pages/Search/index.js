import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchVideoList from "../../components/SearchVideoList";
import videos from "../../json/videos.json";

import styles from "./Search.module.css";

function Search() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.search}>
          <h2>Pesquisar</h2>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;