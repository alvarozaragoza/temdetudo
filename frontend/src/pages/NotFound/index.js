import React from 'react';
import { Link } from 'react-router-dom';
import { PageArea } from './styled';

const Page = () => {
    return (
        <PageArea>
            <div>
                <h2>Página não encontrada!</h2>
                <br/>
                <Link to="/" className="button">Voltar</Link>
            </div>
        </PageArea>
    );
}

export default Page;