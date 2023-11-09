import Layout from '../components/Layout';

const Home = () => {
return (
    <div className="App">
        <Layout>
            <header>
                <section>
                    <div>
                        <h1>El-jareau</h1>
                        <h2>Flier</h2>
                    </div>
                    <h2>Techniek collge schiedam</h2>
                </section>

                <div className="profile">
                    <img src="" alt="a photo of me" />
                    <h2>Software developer</h2>
                </div>
            </header>
            <main>
                <section className="main1">
                    <div className="Aboutme">
                        <h2 className="about">About</h2>
                        <h2>me</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas et quibusdam odio ipsum aliquam
                        incidunt eius sed, possimus nesciunt fugit nam laudantium dolorem similique ducimus illum suscipit
                        necessitatibus deserunt.
                    </p>
                </section>

                <section className="main2"> 


                </section>

            </main>
        </Layout>
    </div>

);
}

export default Home;