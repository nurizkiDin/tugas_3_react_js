import MenuMakanan from "./page/MenuMakanan";
import Header from "./page/Header";
import Footer from "./page/Footer";
import MenuKontak from "./page/MenuKontak";
import MenuTentangKami from "./page/MenuTentangKami";

function App() {
  return (
    <div>
      <Header/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
    </div>
  );
}

export default App;
