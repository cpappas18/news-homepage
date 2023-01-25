const SuggestedArticles = () => {
    return (
        <section className='suggested'>
            <ul>
                <li>
                    <article>
                        <img src={require('../assets/images/image-retro-pcs.jpg')} alt='Retro PCs'/>
                        <div>
                            <h2>01</h2>
                            <h5>Reviving Retro PCs</h5>
                            <p>What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article>
                        <img src={require('../assets/images/image-top-laptops.jpg')} alt='Laptop'/>
                        <div>
                            <h2>02</h2>
                            <h5>Top 10 Laptops of 2022</h5>
                            <p>Our best picks for various needs and budgets.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article>
                        <img src={require('../assets/images/image-gaming-growth.jpg')} alt='Gaming Controller'/>
                        <div>
                            <h2>03</h2>
                            <h5>The Growth of Gaming</h5>
                            <p>How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </article>
                </li>
            </ul>
        </section>
    )
}

export default SuggestedArticles;