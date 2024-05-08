import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Main } from "./main/main";
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col py-1">
        <Header />
        <Main  className="h-"/>
        <Footer />
      </div>
    </Router>
  );
}