const Main = () => {
    return (
        <article className='main-content'>
            <div id='img-container'>
                <img src={require('../assets/images/image-web-3-desktop.jpg')} alt='' className='desktop'/>
                <img src={require('../assets/images/image-web-3-mobile.jpg')} alt='' className='mobile'/>
            </div>
            <h1>The Bright Future of Web 3.0?</h1>
            <div id='text-container'>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button id='read-more'>Read More</button>
            </div>
        </article>
    )
}

export default Main;