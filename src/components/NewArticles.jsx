const NewArticles = () => {
    return (
        <section className='new-articles'>
            <h2>New</h2>
            <ul>
                <li>
                    <article>
                        <h4>Hydrogen VS Electric Cars</h4>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </article>
                </li>
                <li>
                    <article>
                        <h4>The Downsides of AI Artistry</h4>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </article>
                </li>
                <li>
                    <article>
                        <h4>Is VC Funding Drying Up?</h4>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </article>
                </li>
            </ul>
        </section>
    )
}

export default NewArticles;