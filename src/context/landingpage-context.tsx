import { createContext, useContext, useState } from "react";

type LandingProp = {
    focus: string;
    path: string[];
    setFocus: (e: string) => void;
    setPath: (e:string[]) => void;
}

const LandingContext = createContext<LandingProp | undefined>(undefined);

export function LandingProvider({ children }: { children: React.ReactNode }) {
    const [focus, setFocus] = useState("Home");
    const [path, setPath] = useState<string[]>([]);

    return <LandingContext.Provider value={{ focus, setFocus, path, setPath }}>
        {children}
    </LandingContext.Provider>
}

export function useLandingContext() {
    const context = useContext(LandingContext);

    if (context === undefined) throw new Error("useLandingContext must be used inside use landing context provider");
    return context;
}