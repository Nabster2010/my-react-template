import i18n from "./i18n";
import "./App.css";
import Header from "./components/Header";

function App() {
  i18n.on("languageChanged", (locale) => {
    const direction = i18n.dir(locale);
    console.log(direction);
    document.dir = direction;
  });
  return (
    <div className="min-h-screen text-black bg-white dark:bg-gray-600 dark:text-white">
      <Header />
    </div>
  );
}

export default App;
