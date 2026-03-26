
import './header.css'
import aa from '../../assets/aa.png'
import business from '../../assets/business.png'

function Header() {
    return (
        <div className='container ' >

            <header>
                <img className='img1' src={aa} alt="" />

                <div className='div-p' >
                    <p>Home</p>
                    <p>How we work</p>
                    <p>Our team</p>
                    <p>Pricing</p>

                    <button className='bookacall' >Book a call</button>
                </div>
            </header>

            <main>
                <section className='container section-one' >
                    <div className='div-2' >
                        <h1>
                            How to <span className='spanello' >level up</span> your business
                        </h1>

                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est faucibus tellus leo non pellentesque lorem vel. Arcu magna eros, potenti duis.</p>

                        <button className='btn-2' >How we work</button>    <button className='button-3' >Let's talk - </button>

                    </div>
                    <img src={business} alt="" />
                </section>
            </main>



        </div >
    );
}

export default Header;