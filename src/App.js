import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brandImage from "./assets/brand.png";
import storyImage from "./assets/our_story.png";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    cta="to the collection"
                    disabled={false}
                />
                <Button
                    cta="shop all bags"
                    disabled={false}
                />
                <Button
                    cta="pre-order"
                    disabled={true}
                />
            </nav>
            <main>
                <Product
                    labelText="Best Seller"
                    image={bag1}
                    title="The handy bag"
                    price="400"
                />
                <Product
                    labelText="Best Seller"
                    image={bag2}
                    title="The stylish"
                    price="250"
                />
                <Product
                    labelText="New collection"
                    image={bag3}
                    title="The simple bag"
                    price="300"
                />
                <Product
                    labelText="New collection"
                    image={bag4}
                    title="The trendy bag"
                    price="150"
                />

            </main>
            <footer>
                <Tile
                    image={brandImage}
                />
                <Tile
                    title="The Brand"
                >
                    <p> Aliquid amet animi architecto aut doloribus et eum iusto neque officia quam ratione repudiandae,
                        rerum unde veniam voluptatibus.
                    </p>

                </Tile>
                <Tile
                    title="Our story"
                >
                    <p> Aliquid amet animi architecto aut doloribus et eum iusto neque officia quam ratione repudiandae,
                        rerum unde veniam voluptatibus.
                    </p>
                    <p> Aliquid amet animi architecto aut doloribus et eum iusto neque officia quam ratione repudiandae,
                        rerum unde veniam voluptatibus.
                    </p>
                </Tile>
                <Tile
                    image={storyImage}
                />
            </footer>
        </>
    );
}

export default App;



