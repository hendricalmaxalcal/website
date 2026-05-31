import Header from "./web/header";
import Body from "./web/body";
import Footer from "./web/footer";

function App() {
    return (
        <div className="app-container">
            <main className="main-content">
                <Header />
            </main>

            <Body />

            <Footer />
        </div>
    );
}

export default App;