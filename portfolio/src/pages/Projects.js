import Layout from '../components/Layout';
import SkillList from '../components/SkillList';

const Projects = () => {
    return ( 
        <div className='App'>
            <Layout>
                <header className="sect1 project">
                    <section className="skillholder">
                        <h1>My projcets</h1>
                        <SkillList/>
                    </section>
                </header>
                    

            </Layout>
        </div>
     );
}
 
export default Projects;