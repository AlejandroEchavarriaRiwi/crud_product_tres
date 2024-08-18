import { useState } from 'react';

export const useSnackbar = (duration = 3000) => {
    const [visible, setVisible] = useState(false);

    const showSnackbar = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, duration);
    };

    return { visible, showSnackbar };
};
