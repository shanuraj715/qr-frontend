import toast from 'react-hot-toast';

export const toaster = {
    success: message => toast.success(message),
    warning: (message) => {
        toast.success(message, {
            style: {
              border: 'solid 1px var(--yellow)',
              padding: '9px',
              color: 'var(--yellow)',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
            icon: "⚠️"
        });
    },
    error: message => toast.error(message),
    promise: (fn, loadingText = '', successText = 'Sucess', errorText = 'Error') => {
        toast.promise(fn(), {
            loading: loadingText,
            success: successText,
            error: errorText
        })
    },
    custom: (message) => {
        toast.success(message, {
            ...options
        })
    }
}
