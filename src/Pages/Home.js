import { useEffect, useState } from "react";
import { getProductNecklaces, getProductRings } from "../services";
import { Link } from 'react-router-dom'
import '../styles/home.css'



const Home = () => {

    const [rings, setRings] = useState([])
    const [necklaces, setNecklaces] = useState([])

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
            .then((res) =>{
                const products = res
                const getRandomIndex = () => Math.floor(Math.random() * products.length)

                const neck1 = products[getRandomIndex()]

                setNecklaces([neck1])

            })
    }, [])


    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="banner fade-in">
                        <span className="new-collection">NEW COLLECTION</span>
                        <span className='universal'>
                            Universal - <Link to="/shop">Shop Now</Link>
                        </span>
                    </div>
                </div>
            </section>


            <section className='story-section'>
                <div className="container">
                    <p className='creations'>We create modern gold and sterling silver jewelry with a focus on timeless designs, local production, and responsibly sourced materials. </p>
                   
                    <div className="gallery">
                        <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/20159/original/1_ChunkyCurbChainGemstoneBracelet_Garnet.jpg?1621537998" alt="" />
                        <img src="https://modaellas.com//wp-content/uploads/2017/02/collares-2018-collares-largos-de-bershka.jpg" alt="" />
                       
                        <div className="col"></div>
                    </div>
                    <div className="luxury">
                        <div className="col">
                            <h3 className='luxury-title'>
                                Essential Luxury
                            </h3>
                            <button className="btn"> <Link to="/shop" className="color-link"> 
                                Shop Rings
                            </Link></button>
                        </div>
                        <div className="rings">
                            {
                                rings.map(ring => (
                                    <Link to={`/shop/${ring.id}`} className="ring" key={ring.id}>
                                        <img src={ring.images[0].url} alt="" />
                                        <span className="color-rings">{ring.name}</span >
                                        <span className="color-rings">${ring.price}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="creation-section">
                <div className="container">
                    <h3>Effortless pieces, timeless style</h3>
                    <div className="flex">
                        <div className="col-8">
                            <p className="mb-3">We design each of our collections with the intention of creating pieces that can be passed down through generations, with minimal waste and minimal carbon footprint.</p>
                            <button className="btn"> <Link to="/shop" className="color-link">
                                Shop Now
                            </Link></button>
                        </div>
                        <div className="col-4">
                            <div className="slider">
                                <div className="necklaces">
                                    {
                                        necklaces.map(necklace => (
                                            <Link to={`/shop/${necklace.id}`} className="necklace" key={necklace.id}>
                                                <img src={necklace.images[0].url} alt="" />
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
                <div className="overlay"></div>
            </section>

        </>
    );
};

export default Home;