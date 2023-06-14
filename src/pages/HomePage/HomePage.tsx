import { ModeSelect, Navigation } from '../../components';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

    const navigate = useNavigate();

    const handleStartBlank = () => {
        navigate('/fromBlank');
    };

    return (
        <>
            <Navigation />
            <ModeSelect onStartBlank={handleStartBlank} />
        </>
    );
}