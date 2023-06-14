import { Card, Elevation } from '@blueprintjs/core';
import { FileUpload } from '..';

export const BlankStatsbookUpload = () => {
    return (
        <Card elevation={Elevation.TWO}>
            <FileUpload />
        </Card>
    );
}