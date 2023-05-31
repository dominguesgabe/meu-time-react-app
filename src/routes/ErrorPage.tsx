import '../assets/errorPage.css'
import Container from '../components/Container'
import { Link } from 'react-router-dom';
import { Routes } from '../utils/Enum';

type ErrorPageProps = {
    errorMessage: string
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }: ErrorPageProps): JSX.Element => {

    return (
        <Container>
            <h1>Erro</h1>
            <p>
                { errorMessage }
            </p>
            <Link to={Routes.Home}>Voltar para a home</Link>
        </Container>
    )
}