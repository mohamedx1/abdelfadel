import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { X } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const ToastProvider = React.createContext({
    toast: () => { },
});
export const ToastVariants = cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function ToastContainer({ children }) {
    const [toasts, setToasts] = React.useState([]);
    const addToast = React.useCallback((props) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, ...props }]);
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 5000);
    }, []);
    const removeToast = React.useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);
    return (_jsxs(ToastProvider.Provider, { value: { toast: addToast }, children: [children, _jsx("div", { className: 'fixed top-0 right-0 z-50 flex flex-col gap-2 w-full max-w-sm p-4', children: toasts.map((toast) => (_jsxs("div", { className: cn(ToastVariants({ variant: toast.variant })), children: [_jsx("div", { className: 'flex-1', children: _jsxs("div", { className: 'flex flex-col gap-1', children: [_jsx("div", { className: 'text-sm font-semibold', children: toast.title }), _jsx("div", { className: 'text-sm opacity-90', children: toast.description })] }) }), _jsx("button", { onClick: () => removeToast(toast.id), className: 'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100', children: _jsx(X, { className: 'h-4 w-4' }) })] }, toast.id))) })] }));
}
export function useToast() {
    const context = React.useContext(ToastProvider);
    if (!context) {
        throw new Error("useToast must be used within a ToastContainer");
    }
    return context;
}
