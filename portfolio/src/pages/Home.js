import Layout from '../components/Layout';

const Home = () => {
return (
<div className="App">
    <Layout>
        <header>
            <section className="profile">
                <article className='profileText'>
                    <div>
                        <h1>El-jareau</h1>
                        <h2>Flier</h2>
                    </div>
                    <h2>Techniek collge schiedam</h2>
                </article>

                <div className="profileImg">
                    <img src="images/m5.png" alt="me" />
                    <h2>Software developer</h2>
                </div>
            </section>
        </header>
        <main>
            <section className="main1">
                <div className="Aboutme">
                    <h2 className="about">About</h2>
                    <h2>me</h2>
                </div>
                <p>
                    Hi, my name is El-Jareau Flier and im an motivated MBO 4 Front-End Development student seeking opportunities to apply creative and
                    technical skills in a dynamic work environment. Eager to contribute to innovative web development
                    projects and enhance user experiences.
                </p>
            </section>

            <section className="App-section">
        <h2>Skills</h2>
        <ul className="App-skills-list">
            <li className="App-skill">
              <span className="App-skill-name">hh</span>
              <span className="App-skill-level">546</span>
              <div className="App-skill-progress">
                <div className="App-progress-bar" ></div>
              </div>
            </li>
        </ul>
      </section>

        </main>
    </Layout>
</div>

);
}

export default Home;