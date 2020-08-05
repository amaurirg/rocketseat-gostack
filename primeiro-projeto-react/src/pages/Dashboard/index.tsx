import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/11185971?s=460&u=7fa8c89bd71c2309d770d6ea421f0e8c6a9996e8&v=4" alt="Amauri" />
          <div>
            <strong>amaurirg/rocketseat-es6</strong>
            <p>Curso gratuito Rocketseat ES6</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/11185971?s=460&u=7fa8c89bd71c2309d770d6ea421f0e8c6a9996e8&v=4" alt="Amauri" />
          <div>
            <strong>amaurirg/rocketseat-es6</strong>
            <p>Curso gratuito Rocketseat ES6</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/11185971?s=460&u=7fa8c89bd71c2309d770d6ea421f0e8c6a9996e8&v=4" alt="Amauri" />
          <div>
            <strong>amaurirg/rocketseat-es6</strong>
            <p>Curso gratuito Rocketseat ES6</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>

    </>
  )
}

export default Dashboard;