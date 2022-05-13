import { useEffect, useState } from "react";
import { getProductNecklaces, getProductRings } from "../services";
import { Link } from 'react-router-dom'


const Home = () => {

    const [rings, setRings] = useState([])
    const [necklaces, setNecklaces] = useState([])
    const [position, setPosition] = useState(1)

    useEffect(() => {
        getProductRings()
            .then((res) => {
                const products = res
                const getRandomIndex = () => Math.floor(Math.random() * products.length)

                const ring1 = products[getRandomIndex()]
                let ring2 = products[getRandomIndex()]

                while (ring1.id === ring2.id) ring2 = products[getRandomIndex()]

                setRings([ring1, ring2])
            })

        getProductNecklaces()
            .then((res) => setNecklaces(res))
    }, [])


    return (
        <>
            <section>
                <div>
                    <div>
                        <span>home</span>
                        <br />
                        <span>
                            Todos los productos - <Link to="/shop">Shop Now</Link>
                        </span>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/20159/original/1_ChunkyCurbChainGemstoneBracelet_Garnet.jpg?1621537998" alt="" width="100px" />
                        <div></div>
                    </div>
                    <div >
                        <div >
                            <h3 >
                                gsdfgb
                            </h3>
                            <Link to="/shop">
                                Shop Rings
                            </Link>
                        </div>
                        <div>
                            {
                                rings.map(ring => (
                                    <Link to={`/shop/${ring.id}`} key={ring.id}>
                                        <img src={ring.images[0].url} alt="" width="100px" />
                                        <span>{ring.name}</span>
                                        <span>${ring.price}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h3>gsgsdf</h3>
                    <div >
                        <div>
                            
                            <Link to="/shop">
                                fgfgg
                            </Link>
                        </div>
                        <div >
                            <div >
                                <button onClick={() => setPosition(position-1)} disabled={position === 1}>
                                    <i>
                                        back
                                    </i>
                                </button>
                                <button onClick={() => setPosition(position+1)} disabled={position === necklaces.length}>
                                    <i>
                                       next
                                    </i>
                                </button>
                            </div>
                            <div>
                                <div>
                                    {
                                        necklaces.map(necklace => (
                                            <Link to={`/shop/${necklace.id}`}  key={necklace.id}>
                                                <img src={necklace.images[0].url} alt="" width="100px" />
                                                <span>{necklace.name}</span>
                                                <span>${necklace.price}</span>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;