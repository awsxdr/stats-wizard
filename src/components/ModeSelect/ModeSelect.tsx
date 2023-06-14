import { Button, Card, Elevation } from '@blueprintjs/core';
import styles from './ModeSelect.module.scss';

interface IModeSelectProps {
    onStartBlank?: () => void,
    onStartFilled?: () => void,
}

export const ModeSelect = ({ onStartBlank, onStartFilled }: IModeSelectProps) => {
    return (
        <Card elevation={Elevation.TWO} className={styles.modeSelect}>
            <h3>How would you like to use the wizard?</h3>
            <Button fill onClick={() => (onStartBlank && onStartBlank())}>With blank stats book</Button>
            <Button fill disabled onClick={() => (onStartFilled && onStartFilled())}>From filled stats book</Button>
        </Card>
    );
}