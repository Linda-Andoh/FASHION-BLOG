
import './App.css';
import Blog from './pages/Blog';
import Main from "./pages/Main";
import Header from "./pages/Header";
import Nav from "./components/Nav";
import imageOne from "./images/blog-image-1.jpg";
import imageTwo from "./images/blog-image-2.jpg";
import Footer from "./pages/Footer";

export default function App () {
  return (
    <div className="App">
        <main>
          <Header />
          <Nav />
            <article>
                <h3>11/12/20</h3>
                <h2 id="header-name">On the Street in Brooklyn</h2>
                <img src={imageOne} alt="woman in orange dress walking in an industrial area "/>

                <p id="letter">Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo
                    dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit
                    officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimuis est ea at neque alias.
                    Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex
                    consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae,
                    itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam
                    doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque
                    optio odio qui! id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod
                    quisquam quo ab molestiae.
                </p>

                <p id="continues"><a href="...">Continues ... </a></p>
            </article>


            <article>
                <h3>11/11/13</h3>
                <h2 id="header-name"> Vintage in Vogue </h2>
                <img src={imageTwo} alt="A woman, a man and another woman in evening party attire"/>
                <p id="letter">Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo
                    dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit
                    officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimuis est ea at neque alias.
                    Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex
                    consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae,
                    itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam
                    doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque
                    optio odio qui! id architecto impedit consequatur r</p>

                <p id="continues"><a href="...">Continues ... </a></p>
                <Footer />
            </article>
        </main>
    </div>
  );
}

