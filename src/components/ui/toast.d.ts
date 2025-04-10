import * as React from "react";
export declare const ToastVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function ToastContainer({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useToast(): {
    toast: (props: {
        title: string;
        description: string;
        variant?: "default" | "destructive";
    }) => void;
};
