import Layout from '../components/Layout';

const Contact = () => {
    return ( 
        <div className='App'>
            <Layout>
                <header>
                    <section className="sect1">
                        <h1>Hello</h1>
                        <h2>As long i dont have any intership.</h2>
                        <h2>contact me so we can get in touch!</h2>

                        <article>
                            <p>Email: el.j.flier@gmail.com</p>
                            <p>School email: 9017738@student.zadkine.nl</p>
                            <p>Phone number: 06 23549646</p>
                            <ul class="links">
                                <li>On the interneth: </li>
                                <li><a target="_blank" href="mailto:el.j.flier@gmail.com" rel="noreferrer">Email</a></li>
                                <li>/</li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/el-jareauflierstudent/" rel="noreferrer">LinkedIn</a></li>
                                <li>/</li>
                                <li><a target="_blank" href="https://github.com/El-JareauFlier" rel="noreferrer">GitHub</a></li>
                            </ul>
                        </article>

                    </section>
                </header>
            </Layout>
        </div>
     );
}
 
export default Contact;